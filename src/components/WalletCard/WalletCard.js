import React from 'react'
import classes from './WalletCard.module.css'

const WalletCard = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.Left}>
                <div className={classes.Icon}>
                    <img src={props.icon} alt={props.type} />
                </div>
                <div className={classes.Main}>
                    <span className={classes.Heading}>{props.title}</span>
                    <span className={classes.Time}>{props.time}</span>
                </div>
            </div>
            <span className={classes.Amount} style={{color : `${props.type==='cashback' ? '#00b246' : 'black'}`}}>{props.type==='cashback' ? '+' : '-'} <span>￡{props.amount}</span></span>
        </div>
    )
}

export default WalletCard