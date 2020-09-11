import React from 'react'
import classes from './CategoryCardShops.module.css'

const CategoryCardShops = (props) => {

    return(
        <div className={classes.Container } style={props.active===props.text ? {'backgroundColor' : '#00b246'} : null} onClick={() => {props.handleCurrent(props.text)}}>
            <div className={classes.Icon}>
                <img src={props.icon} alt="Icon" />
            </div>
            <span className={classes.Text} style={props.active===props.text ? {'color' : '#fff'} : null}>{props.text}</span>
        </div>
    )
}

export default CategoryCardShops