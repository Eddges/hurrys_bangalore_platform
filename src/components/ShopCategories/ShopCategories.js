import React from 'react'
import classes from './ShopCategories.module.css'
import shopItem from '../../assets/shop-item.png'
import {NavLink} from 'react-router-dom'

const ShopCategories = (props) => {

    return(
        <div className={classes.Container}>
            <span className={classes.Heading}>Categories</span>
            <div className={classes.Items}>
                <NavLink to="/grocery" className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Health Supplements</span>
                </NavLink>
                <NavLink to="/grocery" className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Beverages</span>
                </NavLink>
                <NavLink to="/grocery" className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </NavLink>
                <NavLink to="/grocery" className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </NavLink>
                <NavLink to="/grocery" className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </NavLink>
                <NavLink to="/grocery" className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </NavLink>
            </div>

        </div>
    )
}

export default ShopCategories