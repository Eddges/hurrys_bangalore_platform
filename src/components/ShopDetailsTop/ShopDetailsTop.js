import React from 'react'
import classes from './ShopDetailsTop.module.css'
import bazaar from '../../assets/bazaar.jpeg'
import offer from '../../assets/offer.png'

const ShopDetailsTop = (props) => {

    return(
        <div className={classes.Top}>
            <div className={classes.Left}>
                <img src={bazaar} alt="Shop Image" />
                <div className={classes.Details}>
                    <span className={classes.ShopName}>Bangalore Bazaar</span>
                    <span className={classes.Delivery}>2 hour delivery | 7 km away</span>
                    <span className={classes.Location}>HSR Layout</span>
                </div>
            </div>
            <div className={classes.Right}>
                <span className={classes.Heading}>EXCLUSIVE OFFERS</span>
                <div className={classes.OfferItem}>
                    <img src={offer} alt="Offer Icon" />
                    <span>Free Delivery on all orders about ₹500</span>
                </div>
                <div className={classes.OfferItem}>
                    <img src={offer} alt="Offer Icon" />
                    <span>Upto 50% off on all Staples and Health Drinks</span>
                </div>
            </div>
        </div>
    )
}

export default ShopDetailsTop