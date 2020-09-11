import React from 'react'
import classes from './CategoryCard.module.css'
import { NavLink } from 'react-router-dom'

const CategoryCard = (props) => {

    const hrStyle = {
        flexDirection : 'row'
    }

    return(
        <NavLink className={classes.Container } to="/shops">
            <div className={classes.Icon}>
                <img src={props.icon} alt="Icon" />
            </div>
            <span className={classes.Text}>{props.text}</span>
        </NavLink>
    )
}

export default CategoryCard