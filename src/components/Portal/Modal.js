import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';
import * as AiIcons from 'react-icons/ai';
import * as LoIcons from 'react-icons/io';
import logo from '../../assets/LogoBlack.png';
import logoImage from '../../assets/loginImage.png';
import fbLogin from '../../assets/facebookLogin.png';
import gLogin from '../../assets/bitmap.png';



const Button_el = {
    border:'none',
    backgroundColor:'gray',
    fontWeight:600,
    color:'white',
    marginLeft:'1em',
    left:'1em',

}



function Modal({ open , children, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal (
        <>
          <div className = {styles.Overlay_Styles}/>
          <div className = {styles.Modal_Styles}>
            
            <div className = {styles.login_wrapper}>
              <div className = {styles.login_header}>
                {/* <AiIcons.AiOutlineClose style = {{fontWeight:900, marginLeft:'auto' }} /> */}
                <LoIcons.IoIosClose onClick = {onClose} style = {{fontWeight:900, marginLeft:'auto',fontSize:50 }} />
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
                <div className = {styles.inputArea}>
                  <label>
                    <p style = {{fontWeight:600}}>Enter Mobile Number/Email ID</p>
                    <input type = "text" />
                  </label>

                  <label className = {styles.otp}>
                    <p style = {{fontWeight:600}}>Enter OTP</p>
                    <div className = {styles.otpInput}>
                      <input type = "text" maxLength = "1" />
                      <input className = {styles.s_input} type = "text" maxLength = "1" />
                      <input className = {styles.s_input} type = "text" maxLength = "1"  />
                      <input className = {styles.s_input} type = "text" maxLength = "1"  />
                    </div>
                   
                  </label>
                </div>
                <div className = {styles.footer}>
                  <img src = {gLogin}/>
                  <img src = {fbLogin}/>
                </div>
              </div>
            </div>
            
          </div>
        </>,
        document.getElementById('portal')
      
    )
}

export default Modal
