import React from 'react'
import classes from './WebTop.module.css'

const WebTop = (props) => {
    return(
        <div className={classes.WebTop}>
            <span className={classes.Highlight}>Hurry's there to help you with deliveries</span>
            <span className={classes.SubText}>We help your business to cater with the hyperlocal super fast delivery. Join us today</span>
            <button className={classes.TopButton}>BECOME A VENDOR</button>
        </div>
    )
}

export default WebTop