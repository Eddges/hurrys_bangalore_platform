import React from 'react'
import classes from './AvailableShopsCard.module.css'
import { NavLink } from 'react-router-dom'

const AvailableShopsCard = (props) => {
    return(
        <NavLink to="/shopdetails" className={classes.Container} 
            onClick={() => {
                window.scrollTo(0, 0)
            }}
        >
            <div className={classes.Icon}>
                <img className={classes.Icon} src={props.icon} alt={props.Name} />
                {/* <img style={props.available ? null : {'filter' : 'grayscale(100%)'}} className={classes.Icon} src={props.icon} alt={props.name} /> */}
            </div>
            <div className={classes.Details}>
                <span className={classes.Name}>{props.Name}</span>
                <span className={classes.Delivery}>{props.DeliveryTime} delivery | {props.d.toFixed(1)} km away</span>
                <span className={classes.Location}>{props.BusinessAddress}</span>
                <span className={classes.Discount}>{props.discount}</span>
            </div>
        </NavLink>
    )
}

export default AvailableShopsCard