import React from 'react';
import * as LoIcons from 'react-icons/io';
import styles from '../Signupcontent.module.css';
// import LoginModal from './LoginModal';

function SignupContent({onClose}) {
    return (
        <>
        <div className = {styles.signup_wrapper}>
             <div className = {styles.signup_header}>
                <LoIcons.IoIosClose onClick = {onClose} style = {{fontWeight:900, marginLeft:'auto',fontSize:50 }} />
            </div>
            <div style = {{borderBottom:'2px solid #eaeaea'}}>
                    <p style ={{fontWeight:600, fontSize:'20px', marginLeft:'9%',marginBottom:'10px'}} >Edit Profile</p>
                </div>
            <div className = {styles.signup_content}>
                
              
                <div className = {styles.signup_input}>
                    <label className = {styles.flabel}>
                        <p>Full Name</p>
                        <input type = "text" placeholder = "Full Name"/>
                    </label>
                    <label>
                        <p>Emai</p>
                        <input type = "text" placeholder = "Email"/>
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input type = "text" placeholder = "977889922"/>
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

