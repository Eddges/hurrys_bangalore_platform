import React from 'react';
import styles from './Footer.module.css';
import hurraylogo from '../../assets/hurraylogo.png';

function Footer() {
    return (
        <div className={styles.footer}>
      <div className = {styles.footer_up}>
        <div className = {styles.box}>
          <img src = {hurraylogo}/>
        </div>
        <div className = {styles.box}>
          <p className = {styles.label} >COMPANY</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>General Enquiry</p>
        </div>
        <div className = {styles.box}>
          <p className = {styles.label} >CONTACT</p>
          <p>Help & Support</p>
          <p>Become a Partner</p>
          <p>Become a Seller</p>
        </div>
        <div className = {styles.box}>
          <p className = {styles.dummy} >CONTACT</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Refund & Cancellation</p>
        </div>
      </div>
      <div className = {styles.footer_down}>
        <p>© 2020 Hurry’s Technology Pvt. Ltd. </p>
      </div>
    </div>
    )
}

export default Footer;
