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
            <p><NavLink onClick={() => window.scroll(0,0)} to="/about">About Us</NavLink></p>
            <p>Careers</p>
            <p><NavLink onClick={() => window.scroll(0,0)} to="/contact">Contact Us</NavLink></p>
          </div>
          <div className = {styles.box}>
            <p className = {styles.label} >CONTACT</p>
            <p><NavLink onClick={() => window.scroll(0,0)} to="/referral">Help and Support</NavLink></p>
        
            <p><NavLink onClick={() => window.scroll(0,0)} to="/delivery">Become a Rider</NavLink></p>
            <p><NavLink onClick={() => window.scroll(0,0)} to="/vendor">Become a Seller</NavLink></p>
          </div>
          <div className = {styles.box}>
            <p className = {styles.dummy} >CONTACT</p>
            <p><NavLink onClick={() => window.scroll(0,0)} to="/terms">Terms & Conditions</NavLink></p>
            <p><NavLink onClick={() => window.scroll(0,0)} to="/privacy">Privacy Policy</NavLink></p>
            <p><NavLink onClick={() => window.scroll(0,0)} to="/cancellation">Refund & Cancellation</NavLink></p>
          </div>
      </div>
      <div className = {styles.footer_down}>
        <p>© 2020 Hurry’s Technology Pvt. Ltd. </p>
      </div>
    </div>
    )
}

export default Footer;
