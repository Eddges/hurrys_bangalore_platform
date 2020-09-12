import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as LoIcons from 'react-icons/io';
import logo from '../../assets/LogoBlack.png';
import logoImage from '../../assets/loginImage.png';
import fbLogin from '../../assets/facebookLogin.png';
import gLogin from '../../assets/bitmap.png';
import styles from './Signupcontent.module.css';
// import LoginModal from './LoginModal';

function SignupContent({onClose}) {
    return (
        <>
        <div className = {styles.signup_wrapper}>
             <div className = {styles.signup_header}>
                <LoIcons.IoIosClose onClick = {onClose} style = {{fontWeight:900, marginLeft:'auto',fontSize:50 }} />
            </div>
            <div className = {styles.signup_content}>
                <p style ={{fontWeight:600}} >Hello! Looks like it's your first time here</p>
                <p style = {{color:'#999999', marginTop:'5px', fontWeight:500,paddingRight:'20px'}}>We need a few more details to get to know you better</p>
                <div className = {styles.signup_input}>
                    <label className = {styles.flabel}>
                        <p>Name</p>
                        <input type = "text" placeholder = "Full Name"/>
                    </label>
                    <label>
                        <p>Emai ID</p>
                        <input type = "text" placeholder = "Email"/>
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input type = "text" placeholder = "977889922"/>
                    </label>
                    <label>
                        <p>Address</p>
                        <input type = "text" placeholder = "Current Address"/>
                    </label>
                    <div className = {styles.btn_wrapper}>
                        <button className = {styles.btn}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignupContent;
