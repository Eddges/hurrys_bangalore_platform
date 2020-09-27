import React from 'react'
import classes from './ProductGrocerMain.module.css'
import ProductGroceryCard from './ProductGroceryCard/ProductGroceryCard'
import ProductIcon from '../../assets/haldirams.jpeg'
import {connect} from 'react-redux'

class ProductGroceryMain extends React.Component{

    state={
        active : 'snacks',
    }

    componentDidMount() {
        this.props.changeActiveItem(this.props.itemSubCategory.ItemCategory.split(',')[0])
    }
    render(){


        return(
            <div className={classes.Container}>
                <div className={classes.Menu}>
                {
                    this.props.itemSubCategory.ItemCategory ? 
                    this.props.itemSubCategory.ItemCategory.split(',').map((iterator, index) => {
                        return(
                            <div key={index} className={ this.props.itemCategory===iterator ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem}
                                onClick={() => {
                                    this.props.changeActiveItem(iterator)
                                    window.scrollTo(0, 0)
                                    }}>
                                <span>{iterator}</span>
                            </div>
                        )
                    }) : null
                }
                    {/* <div className={ this.props.productCategoryDisplay==='snacks' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem}
                        onClick={() => {
                            this.props.changeCategory('snacks')
                            window.scrollTo(0, 0)
                            }}>
                        <span>Snacks</span>
                    </div>
                    <div className={ this.props.productCategoryDisplay==='dairy' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem} onClick={() => this.props.changeCategory('dairy')}>
                        <span>Dairy & Eggs</span>
                    </div>
                    <div className={ this.props.productCategoryDisplay==='breakfast' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem} onClick={() => this.props.changeCategory('breakfast')}>
                        <span>Breakfast</span>
                    </div>
                    <div className={ this.props.productCategoryDisplay==='health' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem} onClick={() => this.props.changeCategory('health')}>
                        <span>Health & Wellness</span>
                    </div>
                    <div className={ this.props.productCategoryDisplay==='bakery' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem} onClick={() => this.props.changeCategory('bakery')}>
                        <span>Bakery</span>
                    </div>
                    <div className={ this.props.productCategoryDisplay==='sauce_dips' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem} onClick={() => this.props.changeCategory('sauce_dips')}>
                        <span>Sauce & Dips</span>
                    </div> */}
                </div>
                <div className={classes.HRLine}></div>
                <div className={classes.Main}>
                    {
                        Object.keys(this.props.selectedShop.Products).map((iterator, index) => {
                            if(this.props.selectedShop.Products[iterator].ItemCategory===this.props.itemCategory) {
                                return(
                                    <ProductGroceryCard key={index} productId={iterator} productsList={this.props.selectedShop.Products[iterator]}  />
                                )
                            }
                        })
                    }
                    {/* {
                        this.props.selectedShop.map((iterator, index) => {
                            if(iterator.category===this.props.productCategoryDisplay) {
                                return(
                                    <ProductGroceryCard key={index} {...iterator}  />
                                )
                            }
                        })
                    } */}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        productCategoryDisplay : state.red.productCategoryDisplay,
        selectedShop : state.red.selectedShop,
        itemSubCategory : state.red.itemSubCategory,
        itemCategory : state.red.itemCategory
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeCategory : (category) => dispatch({
            type : 'CHANGE_PRODUCT_CATEGORY',
            category
        }),
        changeActiveItem : (item) => dispatch({
            type : 'CHANGE_ACTIVE_ITEM',
            payload : item
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGroceryMain)