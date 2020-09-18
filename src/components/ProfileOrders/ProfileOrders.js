import React from 'react'
import ActiveOrderCard from '../ActiveOrderCard/ActiveOrderCard'
import PastOrderCard from '../PastOrderCard/PastOrderCard'
import classes from './ProfileOrders.module.css'

const ProfileOrders = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.Orders}>
                <span className={classes.OrdersHeading}>ACTIVE ORDERS</span>
                <div className={classes.OrdersCards}>
                    <ActiveOrderCard />
                    <ActiveOrderCard />
                </div>
            </div>       
            <div className={classes.Orders}>
                <span className={classes.OrdersHeading}>PAST ORDERS</span>
                <div className={classes.OrdersCards}>
                    <PastOrderCard />
                    <PastOrderCard />
                    <PastOrderCard />
                </div>
            </div>   
        </div>
    )
}

export default ProfileOrders