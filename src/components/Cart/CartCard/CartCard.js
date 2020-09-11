import React from 'react'
import classes from './CartCard.module.css'
import CardItems from '../CartItems/CartItems'

const CartCard = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.Top}>
                <div className={classes.Shop}>
                    <span className={classes.Name}>{props.shop}</span>
                    <span className={classes.Details}>{props.delivery} delivery | {props.distance} away</span>
                </div>
                <button className={classes.ButtonAddMore}>+ ADD MORE</button>
            </div>

            <div className={classes.Mid}>
                <div className={classes.MidTop}>
                    <span className={classes.ItemCount}>{props.items.length} ITEMS</span>
                    <button>CLEAR</button>
                </div>
                <div className={classes.MidMid}>
                    {
                        props.items.map((iterator, index) => {

                                return(
                                    <CardItems key={index} {...iterator}  />
                                )
                            
                        })
                    }
                </div>

            </div>
            <div className={classes.HRLine}></div>
            <div className={classes.Cutlery}>
                <input type="checkbox" />
                <div className={classes.CutleryText}>
                    <span className={classes.Span1}>Include Cutlery</span>
                    <span className={classes.Span2}>Refuse cutlery, go eco-friendly & save ₹3</span>
                </div>
                <span className={classes.CutleryPrice}>₹3</span>
            </div>
            <div className={classes.HRLine}></div>
            <div className={classes.Total}>
                <span>Total</span>
                <span>₹ 363</span>
            </div>
        </div>
    )
}

export default CartCard