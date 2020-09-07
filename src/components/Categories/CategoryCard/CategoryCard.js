import React from 'react'
import classes from './CategoryCard.module.css'

const CategoryCard = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.Icon}>
                <img src={props.icon} alt="Icon" />
            </div>
            <span className={classes.Text}>{props.text}</span>
        </div>
    )
}

export default CategoryCard