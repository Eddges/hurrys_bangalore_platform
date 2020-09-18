import React from 'react'
import classes from './PastOrderCard.module.css'
import fruits from '../../assets/fruits-vegetables.svg'
import {NavLink} from 'react-router-dom'

const PastOrderCard = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.PastTop}>
                <div className={classes.Icon}>
                    <img src={fruits} alt="Product" />
                </div>
                <div className={classes.Details}>
                    <p className={classes.Time}>Fri, 23 June 2020, 10:41 AM</p>
                    <p className={classes.Item}>4 items from Bangalore Bazaar</p>
                </div>
            </div>
            <div className={classes.HRLine}></div>
            <div className={classes.Payment}>
                <span className={classes.AmountPaid}>Amount Paid <span>￡450</span></span>
                <span className={classes.OrderID}>Order ID #493482</span>
            </div>
            <div className={classes.HRLine}></div>
            <NavLink to="/rate" onClick={() => { window.scroll(0,0) }} className={classes.RateOrder}>RATE YOUR ORDER</NavLink>
        </div>
    )
}

export default PastOrderCard