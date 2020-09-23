import React from 'react';
import * as LoIcons from 'react-icons/io';
import styles from './Signupcontent.module.css';
import {connect} from 'react-redux'
// import LoginModal from './LoginModal';
import axios from 'axios'
import firebase, {auth, database} from '../../firebase' 

class SignupContent extends React.Component {

    state = {
        Name : '',
        Email : '',
        MobileNumber : '',
        UserId : null,
        OtpDisplay : false,
        Otp : null
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

    changeName = (e) => {
        this.setState({
            ...this.state,
            Name : e.target.value
        })
    }
    changeEmail = (e) => {
        this.setState({
            ...this.state,
            Email : e.target.value
        })
    }
    changeMobile = (e) => {
        this.setState({
            ...this.state,
            MobileNumber : e.target.value
        })
    }
    changeOtp= (e) => {
        this.setState({
            ...this.state,
            Otp : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setUpRecaptcha()
        let appVerifier = window.recaptchaVerifier
        auth.signInWithPhoneNumber(`+91${this.state.MobileNumber}`, appVerifier)
        .then((confirmationResult) => {
            console.log('Confirmation result', confirmationResult)
            this.setState({
                ...this.state,
                OtpDisplay : true
            })
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
            console.log('Error ', error)
        });
    }

    handleVerfication = e => {
        e.preventDefault()
        let otp = this.state.Otp
        let optConfirm = window.confirmationResult;
        optConfirm
        .confirm(otp)
        .then(async (result) => {
            console.log('OTP confirmation result ', result)
            // User signed in successfully.
            // console.log("Result" + result.verificationID);
            let user = result.user;
            this.setState({
                ...this.state,
                UserId : user.uid
            })
            console.log('User : ', user)
            database.ref('/Users').child(user.uid).child('MobileNumber').set(user.phoneNumber)
            database.ref('/Users').child(user.uid).child('Name').set(this.state.Name)
            database.ref('/Users').child(user.uid).child('Email').set(this.state.Email)
            database.ref('/Users').child(user.uid).child('UserId').set(this.state.UserId)
            .then(() => {
                console.log('User setting Done')
                localStorage.setItem('LoggedIn', true);
                localStorage.setItem('MobileNumber', user.phoneNumber);
                localStorage.setItem('Name', this.state.Name);
                localStorage.setItem('Email', this.state.Email);
                localStorage.setItem('UserId', this.state.UserId);
                this.props.signUser(this.state)
                this.props.onClose()
            })
        })
        .catch(function (error) {
            console.log(error);
            // alert("Incorrect OTP");
        });
    }

    // componentDidMount() {
    //     axios.get('https://hurrys-c3677.firebaseio.com/Users.json')
    //     .then(response => {
    //         console.log(response.data)
    //     })
    // }

    render(){
        return (
            <>
            <div className = {styles.signup_wrapper}>
                <div className = {styles.signup_header}>
                    <LoIcons.IoIosClose onClick = {this.props.onClose} style = {{fontWeight:900, marginLeft:'auto',fontSize:50 }} />
                </div>
                <div className = {styles.signup_content}>
                    <p style ={{fontWeight:600}} >Hello! Looks like it's your first time here</p>
                    <p style = {{color:'#999999', marginTop:'5px', fontWeight:500,paddingRight:'20px'}}>We need a few more details to get to know you better</p>
                    <div className = {styles.signup_input}>
                        <label className = {styles.flabel}>
                            <p>Name</p>
                            <input type = "text" placeholder = "Full Name" onChange={this.changeName}/>
                        </label>
                        <label>
                            <p>Email ID</p>
                            <input type = "text" placeholder = "Email" onChange={this.changeEmail}/>
                        </label>
                        <label>
                            <p>Phone Number</p>
                            <input type = "text" placeholder = "977889922" onChange={this.changeMobile}/>
                        </label>
                        {
                            this.state.OtpDisplay ?
                                <label>
                                    <p>OTP</p>
                                    <input type = "text" placeholder = "Enter OTP" onChange={this.changeOtp}/>
                                </label> 
                                :
                                null
                        }
                        
                        <div className = {styles.btn_wrapper}>
                            <button type="button" className = {styles.btn} onClick={this.state.OtpDisplay ?  this.handleVerfication :  this.handleSubmit}>{this.state.OtpDisplay ? 'Verify OTP' : 'Get OTP'}</button>
                        </div>
                    </div>
                </div>
                <div name="recaptcha-container" id="recaptcha-container"></div>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        user : state.usr
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signUser : (user) => dispatch({
            type : 'CHANGE_USER',
            payload : user
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContent);
