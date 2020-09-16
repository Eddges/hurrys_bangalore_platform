import React from 'react'
import classes from './ShopCategories.module.css'
import shopItem from '../../assets/shop-item.png'

const ShopCategories = (props) => {

    return(
        <div className={classes.Container}>
            <span className={classes.Heading}>Categories</span>
            <div className={classes.Items}>
                <div className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Health Supplements</span>
                </div>
                <div className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Beverages</span>
                </div>
                <div className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </div>
                <div className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </div>
                <div className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </div>
                <div className={classes.Item}>
                    <img src={shopItem} alt="Item" />
                    <span>Staples</span>
                </div>
            </div>

        </div>
    )
}

export default ShopCategories