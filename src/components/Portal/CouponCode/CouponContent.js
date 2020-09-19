import React from 'react';
import * as LoIcons from 'react-icons/io';
import styles from './CouponContent.module.css';

function CouponContent({onClose}) {
    return (
        <>
        <div className = {styles.coupon_wrapper}>
             <div className = {styles.coupon_header}>
                <p style = {{fontWeight:600}}>Apply Coupon</p>
                <LoIcons.IoIosClose onClick = {onClose} style = {{fontWeight:900,fontSize:50,}} />
            </div>


            <div className = {styles.inputArea}>
                <div className = {styles.input_container}>
                    <input type = "text" placeholder = "Enter Coupon Code" />
                    <p>Apply Coupon</p>
                </div>
            </div>

            <div className = {styles.divider}></div>
            <div className = {styles.container}>
                <p>Available Coupons</p>
                <div className = {styles.box}>
                    <div className = {styles.content}>
                        <div className = {styles.up}>
                            <div className = {styles.coupon_code}>
                                <p>JUMBO10</p>
                            </div>
                           
                            <p style = {{color:'#00b246', fontWeight:500, fontSize:'13px',marginTop:'10px'}}>Apply Code</p>
                        </div>
                        <div className = {styles.down}>
                            <p>Get 10% Off</p>
                            <div className = {styles.down_content}>
                                <p>Get flat 10% off on your next order above ₹340. Maximum discount is ₹50.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className = {styles.box}>
                    <div className = {styles.content}>
                        <div className = {styles.up}>
                            <div className = {styles.coupon_code}>
                                <p>JUMBO10</p>
                            </div>
                           
                            <p style = {{color:'#00b246', fontWeight:500, fontSize:'13px',marginTop:'10px'}}>Apply Code</p>
                        </div>
                        <div className = {styles.down}>
                            <p>Get 10% Off</p>
                            <div className = {styles.down_content}>
                                <p>Get flat 10% off on your next order above ₹340. Maximum discount is ₹50.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = {styles.box}>
                    <div className = {styles.content}>
                        <div className = {styles.up}>
                            <div className = {styles.coupon_code}>
                                <p>JUMBO10</p>
                            </div>
                           
                            <p style = {{color:'#00b246', fontWeight:500, fontSize:'13px',marginTop:'10px'}}>Apply Code</p>
                        </div>
                        <div className = {styles.down}>
                            <p>Get 10% Off</p>
                            <div className = {styles.down_content}>
                                <p>Get flat 10% off on your next order above ₹340. Maximum discount is ₹50.</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            
        </div>
        </>
    )
}

export default CouponContent;

