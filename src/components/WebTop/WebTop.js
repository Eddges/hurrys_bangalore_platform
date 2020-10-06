import React from 'react'
import classes from './WebTop.module.css'

const WebTop = (props) => {
    return(
        <div className={classes.WebTop} style={{'backgroundImage' : `url(${props.BG})`}}>
            <span className={classes.Highlight}>{props.highlight}</span>
            <span className={classes.SubText}>{props.subText}</span>
            <button className={classes.TopButton} onClick={props.showModal}>{props.buttonText}</button>
        </div>
    )
}

export default WebTop