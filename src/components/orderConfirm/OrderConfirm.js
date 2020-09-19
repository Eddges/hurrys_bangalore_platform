import React from 'react';
import styles from './OrderConfirm.module.css';
import NavbarAlt from '../NavbarAlt/NavbarAlt';
import logo from '../../assets/paymentsuccess.png';
import applestore from '../../assets/apple.png';
import gplay from '../../assets/gplay.png';
import * as FaIcons from 'react-icons/fa';

function OrderConfirm() {
    return (
        <>
            <div className = {styles.nav_wrapper}>
                <NavbarAlt/>

            </div>
            <div className = {styles.order_wrapper}>
                <div className = {styles.payment_status}>
                    <img src = {logo}/>
                </div>
                <div className = {styles.order_status}>
                    <div className = {styles.left}>
                        <div className = {styles.box}>
                            <div className = {styles.content_box}>
                                <div className = {styles.container}>
                                    <p> Order picked up</p>
                                    <div className = {styles.track}>
                                        Track order
                                    </div>
                                </div>
                                <div className = {styles.container}>
                                <div className = {styles.left}>
                                    <p style = {{fontWeight:600}}>4 items</p>
                                    <p style = {{color:' #626262'}}>from Bangalore Bazaar</p>
                                </div>
                                <div className = {styles.right}>
                                      <p style = {{fontWeight:'600'}}>23 Minutes</p>
                                      <p style = {{color:' #626262'}}>remaining</p>
                                </div>
                                </div>
                                <div style = {{width:'100%', height:'2px', backgroundColor:'#eaeaea'}}/>
                                <div className = {styles.container}>
                                <div className = {styles.left}>
                                    <p style = {{color:' #626262'}}>Amount Paid</p>
                                    <p style = {{fontWeight:'600'}}>450</p>
                                </div>
                                <div className = {styles.right}>
                                      <p style = {{color:'#0e4d97', fontSize:18}}>Order ID #493482</p>
                                </div>
                                </div>
                                <div style = {{width:'100%', height:'2px', backgroundColor:'#eaeaea'}}/>
                                <div className = {styles.container}>
                                <div className = {styles.left}>
                                    <p style = {{fontWeight:'600'}}>Deepak RamaMurthy</p>
                                    <p style = {{color:' #626262'}}>Delivery Executive</p>
                                    
                                </div>
                                <div className = {styles.right}>
                                      <FaIcons.FaPhoneAlt style = {{color:'#00b246', marginLeft:'auto', marginRight:'20px'}} />
                                </div>
                                </div>
                                <div style = {{width:'100%', height:'2px', backgroundColor:'#eaeaea'}}/>

                                <div className = {styles.container}>
                                    <div style = {{display:'flex',justifyContent:'center',alignItems:'center',width:'100%', height:'100%'}}>
                                        <p style = {{  color:'#00b246',fontWeight:600, fontSize:18}}>Contact Support</p>
                                    </div>
                                </div>
                                <div style = {{width:'100%', height:'2px', backgroundColor:'#eaeaea'}}/>
                                <div className = {styles.container}>
                                    <div style = {{display:'flex',justifyContent:'center',alignItems:'center',width:'100%', height:'100%'}}>
                                        <button style = {{fontSize:15}}>Continue Shopping</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className = {styles.right}>
                        <div className = {styles.box}>
                        `<p className = {styles.heading}>Download the app for a smoother experience</p>
                         <p className = {styles.label}>Get things done right from your phone</p>
                         <div className = {styles.btn_wrapper}>
                            <img src = {gplay}/>
                            <img src = {applestore}/>
                         </div>
                        </div>
                    </div>
                </div>
                <div className = {styles.bottom_section}>
                    {/* <img src = {footerImg}/> */}
                </div>
            </div>
        </>
    )
}

export default OrderConfirm
