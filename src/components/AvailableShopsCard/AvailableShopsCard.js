import React from 'react'
import classes from './AvailableShopsCard.module.css'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

const AvailableShopsCard = (props) => {

    let link = '/shopdetails'
    if(props.Category==='Food Delivery'){
        link = '/grocery'
    }
    if(props.Category==='Home Food'){
        link = '/grocery'
    }
    return(
        // <NavLink to={props.Category==='Food Delivery' || props.Category==='Home Food' ? '/grocery ': "/shopdetails"} className={classes.Container} 
        <NavLink to={link} className={classes.Container} 
            onClick={() => {
                window.scrollTo(0, 0)
                console.log('Active Shop : ', props)
                localStorage.setItem('activeShop', JSON.stringify(props))
                props.setActiveShop(props)
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

const mapDispatchToProps = dispatch => {
    return{
        setActiveShop : (shop) => dispatch({
            type : 'SET_ACTIVE_SHOP',
            payload : shop
        })
    }
}

export default connect(null, mapDispatchToProps)(AvailableShopsCard)