import React from 'react'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import PaymentAccordion from '../PaymentAccordion/PaymentAccordion'
import classes from './PackageDrop.module.css'
import deliveryIcon from '../../assets/delivery.svg'
import PackageIcon from '../../assets/packageDrop.png'
import offer from '../../assets/offers.svg';
import CouponPortal from '../Portal/CouponCode/CouponPortal';

const PackageDrop = (props) => {
    return(
        <React.Fragment>
            <NavbarAlt />
            <div className={classes.Container}>
                <div className={classes.PackageLeft}>
                    <div className={classes.PackageLeftTop}>
                        <img src={deliveryIcon} alt="Icon" />
                        <span>Package Pickup and Drop <ion-icon name="information-circle-outline"></ion-icon></span>
                    </div>
                    <div className={classes.Instructions}>
                        <div className={classes.Left}>
                            <span>Make sure that your items : </span>
                            <span>1. Are small enough to be carried on a bike</span>
                            <span>2. Don't contain illegal/restricted items</span>
                        </div>
                        <div className={classes.Right}>
                            <img src={PackageIcon} alt="Delivery Man" />
                        </div>
                    </div>
                    <div className={classes.Form}>
                        <div className={classes.FormItem}>
                            <span className={classes.Title}>Step 1 : <span>Add pickup address</span></span>
                            <div className={classes.Select}>
                                <span className={classes.PickupAddress}>Home</span>
                                <button>CHANGE</button>
                            </div>
                        </div>
                        <div className={classes.FormItem}>
                            <span className={classes.Title}>Step 2 : <span>Add drop address</span></span>
                            <div className={classes.Select}>
                                <button className={classes.ButtonDropAddress}>Select Address</button>
                            </div>
                        </div>
                        <div className={classes.FormItem}>
                            <span className={classes.Title}>Step 3 : <span>Select package content</span></span>
                            <input className={classes.Select} placeholder="e.g. Documents" />
                        </div>
                        <textarea className={classes.PackageInstructions} rows="4" placeholder="Any instructions for delivery? E.g. Don’t ring bell" ></textarea>
                        <span className={classes.Coupon}><img src={offer} alt="Icon" /> <CouponPortal/> </span>
                        <div className={classes.Total}>
                            <span>Total Payable</span>
                            <span>₹234</span>
                        </div>
                    </div>
                </div>
                <div className={classes.PackageRight}>
                    <PaymentAccordion />
                </div>
            </div>
        </React.Fragment>
    )
}

export default PackageDrop