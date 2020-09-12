import React from 'react'
import classes from './ProductGrocerMain.module.css'
import ProductGroceryCard from './ProductGroceryCard/ProductGroceryCard'
import ProductIcon from '../../assets/haldirams.jpeg'
import {connect} from 'react-redux'

class ProductGroceryMain extends React.Component{

    state={
        active : 'snacks',
        products : [
            {
                id : '123',
                category : 'snacks',
                icon : ProductIcon,
                name : "Beaten Moong Dal: Spicy Masala Mix",
                brand : "Haldiram's",
                vegetarian : 'true',
                few : true,
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'snacks',
                icon : ProductIcon,
                name : "Beaten Moong Dal: Spicy Masala Mix",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'snacks',
                icon : ProductIcon,
                name : "Beaten Moong Dal: Spicy Masala Mix",
                brand : "Haldiram's",
                vegetarian : 'true',
                few : true,
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'snacks',
                icon : ProductIcon,
                name : "Beaten Moong Dal: Spicy Masala Mix",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'snacks',
                icon : ProductIcon,
                name : "Beaten Moong Dal: Spicy Masala Mix",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'snacks',
                icon : ProductIcon,
                name : "Beaten Moong Dal: Spicy Masala Mix",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'snacks',
                icon : ProductIcon,
                name : "Beaten Moong Dal: Spicy Masala Mix",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'dairy',
                icon : ProductIcon,
                name : "Dairy Item 1",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'dairy',
                icon : ProductIcon,
                name : "Dairy Item 2",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'dairy',
                icon : ProductIcon,
                name : "Dairy Item 3",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            },
            {
                id : '1456',
                category : 'breakfast',
                icon : ProductIcon,
                name : "Breakfast Item",
                brand : "Haldiram's",
                vegetarian : 'true',
                options : [
                    {
                        value : 'Pack of 2 (100g)',
                        price : 180,
                        stdPrice : 200
                    },
                    {
                        value : '500g',
                        price : 200,
                        stdPrice : 220
                    },
                    {
                        value : '1kg',
                        price : 330,
                        stdPrice : 380
                    }
                ]
            }
        ]
    }
    render(){


        return(
            <div className={classes.Container}>
                <div className={classes.Menu}>
                    <div className={ this.props.productCategoryDisplay==='snacks' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem}
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
                    </div>
                </div>
                <div className={classes.HRLine}></div>
                <div className={classes.Main}>
                    {
                        this.state.products.map((iterator, index) => {
                            if(iterator.category===this.props.productCategoryDisplay) {
                                return(
                                    <ProductGroceryCard key={index} {...iterator}  />
                                )
                            }
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        productCategoryDisplay : state.productCategoryDisplay
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeCategory : (category) => dispatch({
            type : 'CHANGE_PRODUCT_CATEGORY',
            category
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGroceryMain)