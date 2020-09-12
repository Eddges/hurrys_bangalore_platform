import React from 'react';
import styles from './Footer.module.css';
import hurraylogo from '../../assets/hurraylogo.png';
import {NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.footer}>
      <div className = {styles.footer_up}>
          <div className = {styles.box}>
            <img src = {hurraylogo}/>
            <div className = {styles.icon_wrapper}>
              <FaIcons.FaFacebookF style = {{color: 'white',}}/>
              <FaIcons.FaInstagram style = {{color: 'white', marginLeft:'30px'}}/>
              <FaIcons.FaTwitter style = {{color: 'white', marginLeft:'30px'}}/>
            </div>
            
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
            <p><NavLink to="/delivery">Become a Partner</NavLink></p>
            <p><NavLink to="/vendor">Become a Seller</NavLink></p>
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
