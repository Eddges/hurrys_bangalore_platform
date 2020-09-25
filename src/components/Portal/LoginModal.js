import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as LoIcons from 'react-icons/io';
import logo from '../../assets/LogoBlack.png';
import logoImage from '../../assets/loginImage.png';
import fbLogin from '../../assets/facebookLogin.png';
import gLogin from '../../assets/bitmap.png';
import styles from './/modal.module.css'
// import LoginModal from './LoginModal';
import {database, auth, googleAuthProvider, facebookAuthProvider} from '../../firebase'
import firebase from '../../firebase'
import {connect} from 'react-redux'

class LoginModal extends React.Component {

  state = {
    MobileNumber : null,
    otp : null,
    showOtp : false,
    Name : null,
    Email : null,
  }

  handleMobileInput = (e) => {
    this.setState({
      ...this.state,
      MobileNumber : e.target.value
    })
  }

  handleOtpInput = (e) => {
    this.setState({
      ...this.state,
      otp : e.target.value
    })
  }

  sendOtp = e => {
    e.preventDefault()
    console.log('State : ', this.state)
    this.setUpRecaptcha()
    let appVerifier = window.recaptchaVerifier
    auth.signInWithPhoneNumber(`+91${this.state.MobileNumber}`, appVerifier)
    .then((confirmationResult) => {
        console.log('Confirmation result', confirmationResult)
        this.setState({
            ...this.state,
            showOtp : true
        })
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
    })
    .catch((error) => {
        console.log('Error ', error)
    });
  }

  verifyOtp = (e) => {
    e.preventDefault()
    let otpConfirm = window.confirmationResult;
    otpConfirm
    .confirm(this.state.otp)
    .then(async (result) => {
        console.log('OTP confirmation result ', result)
        // User signed in successfully.
        // console.log("Result" + result.verificationID);
        let UserId = result.user.uid
        database.ref('/Users').child(UserId).once('value', snapshot => {
          const user = snapshot.val()
          console.log('User : ', user)
          if(snapshot.val()) {
            localStorage.setItem('LoggedIn', true);
            localStorage.setItem('MobileNumber', result.user.phoneNumber);
            localStorage.setItem('Name', user.Name);
            localStorage.setItem('Email', user.Email);
            localStorage.setItem('UserId', user.UserId);
            this.props.loginUser({
              Name : user.Name,
              Email : user.Email,
              UserId : user.UserId,
              MobileNumber : user.MobileNumber
            })
            this.props.onClose()
          }
        })
        .then(() => {
            console.log('User setting Done')
            
        })
    })
    .catch(function (error) {
        console.log(error);
        // alert("Incorrect OTP");
    });
  }

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
          size: "invisible",
          callback: function (response) {
              this.onSignInSubmit();
          },
          // defaultCountry: "IN",
      }
  );
  }

  handleGoogleSignin = () => {
    auth.signInWithPopup(googleAuthProvider)
    .then(result => {
      console.log(result)
      database.ref('/Users').child(result.user.uid).once('value', snapshot => {
        console.log('Snapshot google : ', snapshot.val())
        if(snapshot.val()) {
          console.log('Yes snapshot has a val')
          localStorage.setItem('UserId', result.user.uid)
          localStorage.setItem('Name', result.user.displayName)
          localStorage.setItem('Email', result.user.email)
          localStorage.setItem('LoggedIn', true)
          this.props.loginUser({
              Name : result.user.displayName,
              Email : result.user.email,
              UserId : result.user.uid
          })
          this.props.onClose()
        }
        else {
          console.log('No val in snapshot')
          database.ref('/Users').child(result.user.uid).child('Name').set(result.user.displayName)
          database.ref('/Users').child(result.user.uid).child('Email').set(result.user.email)
          database.ref('/Users').child(result.user.uid).child('UserId').set(result.user.uid)
          .then(() => {
            console.log('New User creation should be complete')
            this.props.onClose()
            this.props.loginUser({
              Name : result.user.displayName,
              Email : result.user.email,
              UserId : result.user.uid
            })
          })
          localStorage.setItem('UserId', result.user.uid)
          localStorage.setItem('Name', result.user.displayName)
          localStorage.setItem('Email', result.user.email)
          localStorage.setItem('LoggedIn', true)

        }
      })
    })
    .catch(error => alert(error))
  }

  handleFacebookSignin = () => {
    auth.signInWithPopup(facebookAuthProvider)
    .then(result => {
      console.log(result)
    })
  }

  componentDidMount() {
    console.log('Available hai kya? '  )
    database.ref('/Users').child('99OMBfekKgYZmhHPPftmJOrDEKa2').once('value', snapshot => {
      console.log('Snapshot : ', snapshot.val())
    })
  }

  render(){
    return (
        <>
        <div className = {styles.login_wrapper}>
              <div className = {styles.login_header}>
                {/* <AiIcons.AiOutlineClose style = {{fontWeight:900, marginLeft:'auto' }} /> */}
                <LoIcons.IoIosClose onClick = {this.props.onClose} style = {{fontWeight:900, marginLeft:'auto',fontSize:50 }} />
              </div>
              <div className = {styles.login_content}>
                <div className = {styles.login_content_header}>
                  <div className = {styles.left}>
                    <p>Welcome Back to</p>
                    <img src = {logo}/>
                    <p style = {{marginTop:'15px', color:'black', fontWeight:500}} >Sign In to get Started</p>
                  </div>
                  <div className = {styles.right}>
                   <img src = {logoImage}/>
                  </div>
                </div>
                <form className = {styles.inputArea} onSubmit={this.state.showOtp ? this.verifyOtp : this.sendOtp}>
                  <label>
                    <p style = {{fontWeight:600}}>Enter Mobile Number</p>
                    <input type = "text" onChange={this.handleMobileInput} />
                  </label>

                  {
                    this.state.showOtp ? 
                      <label className = {styles.otp}>
                        <p style = {{fontWeight:600}}>Enter OTP</p>
                        <div className = {styles.otpInput}>
                          <input type = "text" onChange={this.handleOtpInput} />
                        </div> 
                      </label>
                      : null
                  }

                  <button >{this.state.showOtp ? 'Verify OTP' : 'Get OTP'}</button>
                </form>
                <div className = {styles.footer}>
                  <img src = {gLogin} onClick={this.handleGoogleSignin}/>
                  <img src = {fbLogin} onClick={this.handleFacebookSignin}/>
                </div>
              </div>
              <div id="recaptcha-container" name="recaptcha-container"></div>
            </div>
        </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    loginUser : (user) => dispatch({
      type : 'CHANGE_USER',
      payload : user
    })
  }
}

export default connect(null, mapDispatchToProps)(LoginModal)
