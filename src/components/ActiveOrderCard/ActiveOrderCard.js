import React from 'react'
import classes from './ActiveOrderCard.module.css'
import avatar from '../../assets/avatar2.jpg'
import phone from '../../assets/phone.svg'

class ActiveOrderCard extends React.Component{

    state = {

    }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.ActiveTop}>
                    <span className={classes.OuterCircle}><span className={classes.InnerCircle}></span></span>
                    <span className={classes.OrderStatus}>Order picked up</span>
                    <button className={classes.ButtonTrack}>TRACK ORDER</button>
                </div>
                <div className={classes.Details}>
                    <span className={classes.Left}>4 items <span className={classes.Location}>from Bangalore Bazaar</span></span>
                    <span className={classes.Right}>23 minutes <span className={classes.Remaining}>remaining</span></span>
                </div>
                <div className={classes.HRLine}></div>
                <div className={classes.Payment}>
                    <div className={classes.Left}>
                        <span className={classes.Paid}>Amount Paid</span>
                        <span className={classes.Amount}>￡450</span>
                    </div>
                    <span className={classes.Right}>Order ID #493482</span>
                </div>
                <div className={classes.HRLine}></div>
                <div className={classes.Delivery}>
                    <div className={classes.Left}>
                        <div className={classes.Image}>
                            <img src={avatar} alt="Avatar" />
                        </div>
                        
                        <div className={classes.Profile}>
                            <span className={classes.Name}>Jenna Fischer</span>
                            <span className={classes.Role}>Delivery Executive</span>
                        </div>
                    </div>
                    <img className={classes.PhoneIcon} src={phone} alt="Phone Icon" />
                </div>
                <div className={classes.HRLine}></div>
                <p className={classes.SupportCustomer}>CONTACT SUPPORT</p>
            </div>
        )
    }
}

export default ActiveOrderCard