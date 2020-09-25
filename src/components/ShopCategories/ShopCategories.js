import React from 'react'
import classes from './ShopCategories.module.css'
import shopItem from '../../assets/shop-item.png'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const ShopCategories = (props) => {
    console.log('Selected Shop : ', props.shop)
    return(
        <div className={classes.Container}>
            <span className={classes.Heading}>Categories</span>
            <div className={classes.Items}>
                {   props.shop.SubCategory ? 
                    Object.keys(props.shop.SubCategory).map((iterator, index) => {
                        return(
                            <NavLink key={index} to="/categories" onClick={() => props.changeItemSubCategory(props.shop.SubCategory[iterator])} className={classes.Item}>
                                <img src={props.shop.SubCategory[iterator].SubCategoryImage} alt="Item" />
                                <span>{props.shop.SubCategory[iterator].Name}</span>
                            </NavLink>
                        )
                    }) : null
                }
                {/* <NavLink to="/grocery" className={classes.Item}>
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
                </NavLink> */}
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        shop : state.red.selectedShop
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeItemSubCategory : (category) => dispatch({
            type : 'CHANGE_ITEM_CATEGORY',
            payload : category
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCategories)