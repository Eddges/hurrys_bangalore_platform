import React from 'react';
import styles from './CustomerSupport.module.css';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

function CustomerSupport() {
    return (
        <div className = {styles.container}>
            <div className = {styles.header}>
                <div className = {styles.header_content}>
                    <p className = {styles.heading}>What help you need today?</p>
                    <div className = {styles.inputArea}>
                        
                        <IoIcons.IoIosSearch style = {{fontSize:'35px',fontWeight:700, color:'gray', paddingLeft:'10px'}}/>
                        <input type = "text" placeholder = "Enter your query"/>
                        <p style = {{color:'#00b246', fontWeight:600, marginLeft:'auto', marginRight:'15px', cursor:'pointer'}}>SEARCH</p>
                        
                    </div>
                    
                </div>
            </div>
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

            <div className = {styles.category_box}>
                <div className = {styles.content}>
                    <p className = {styles.text}>Browse FAQs</p>
                    <FaIcons.FaGreaterThan style = {{color:'#999999', fontWeight:500, fontSize:'15px'}} />
                </div>
            </div>
        </div>

        
    )
}

export default CustomerSupport
