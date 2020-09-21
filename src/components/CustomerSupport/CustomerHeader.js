import React from 'react';
import styles from './CustomerSupport.module.css';
import * as IoIcons from 'react-icons/io';

function CustomerHeader() {
    return (
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
    )
}

export default CustomerHeader
