import React from 'react';
import styles from './Referral.module.css';
import NavbarAlt from '../NavbarAlt/NavbarAlt';
import referralImg from '../../assets/referralImg.png';
import applestore from '../../assets/apple.png';
import gplay from '../../assets/gplay.png';

function ReferralPage() {
    return (
        <>
            {/* <div className = {styles.header}>
            </div> */}
            <div className = {styles.main_container}>
                <div className = {styles.left}>
                    <div className = {styles.box}>
                        <div className = {styles.header}>
                            <p style = {{marginLeft:'15px',color:'#999999', fontSize:'15px'}}>Referral</p>
                        </div>
                        <p>Help us reach out to your</p>
                        <p>friends and get</p>
                        <p> <span style = {{color:'black'}}>50% off</span> on </p>
                        <p>your next order*</p>
                        <p style = {{marginTop:'25px', fontSize:'13px'}}>*T&C Apply</p>
                        <div className = {styles.bottom_section}>
                            <div className = {styles.referral_container}>
                                <p>RTYF-GTIO-COPR-FOTJ</p>
                                <button>share</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles.right}>
                    {/* <img src = {referralImg}/> */}
                    <div className = {styles.content}>
                    <img src = {referralImg}/>
                    {/* <p className = {styles.heading}>Download the app for a smoother experience</p>
                    <p className = {styles.label}>Get things done right from your phone</p>
                    <div className = {styles.btn_wrapper}>
                        <img src = {gplay}/>
                        <img src = {applestore}/>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferralPage
