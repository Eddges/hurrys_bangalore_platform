import React from 'react'
import classes from './ShopDetailsTop.module.css'
import bazaar from '../../assets/bazaar.jpeg'
import offer from '../../assets/offer.png'
import {connect} from 'react-redux'

const ShopDetailsTop = (props) => {

    return(
        <div className={classes.Top}>
            <div className={classes.Left}>
                <img src={props.shop.Doc7} alt="Shop Image" />
                <div className={classes.Details}>
                    <span className={classes.ShopName}>{props.shop.Name}</span>
                    <span className={classes.Delivery}>{props.shop.DeliveryTime} mins delivery | {props.shop.d.toFixed(1)} miles away</span>
                    <span className={classes.Location}>{props.shop.ShopAddress}</span>
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

const mapStateToProps = state => {
    return{
        shop : state.red.selectedShop
    }
}

export default connect(mapStateToProps)(ShopDetailsTop)