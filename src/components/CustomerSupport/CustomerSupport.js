import React from 'react';
import styles from './CustomerSupport.module.css';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CustomerHeader from './CustomerHeader';

function CustomerSupport() {
    return (
        <div className = {styles.container}>
            <CustomerHeader/>
            <div className = {styles.category_box}>
                <div className = {styles.content}>
                    <p className = {styles.text}>Chat with us</p>
                    <FaIcons.FaGreaterThan style = {{color:'#999999', fontWeight:500, fontSize:'15px'}} />
                </div>
            </div>

            <div className = {styles.category_box}>
                <div className = {styles.content}>
                    <p className = {styles.text}>Call Us</p>
                    <p className = {styles.text_second}>+91 223 993 9393</p>
                </div>
            </div>

            <div className = {styles.category_box}>
                <div className = {styles.content}>
                    <p className = {styles.text}>Emai Us</p>
                    <p className = {styles.text_second}>hello@hurrys.com</p>
                </div>
            </div>

            <NavLink to = "/customer-faq">
            <div className = {styles.category_box}>
                <div className = {styles.content}>
                    <p className = {styles.text}>Browse FAQs</p>
                    <FaIcons.FaGreaterThan style = {{color:'#999999', fontWeight:500, fontSize:'15px'}} />
                </div>
            </div>
            </NavLink>
        </div>

        
    )
}

export default CustomerSupport
