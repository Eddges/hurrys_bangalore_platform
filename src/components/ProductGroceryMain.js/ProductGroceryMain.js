import React from 'react'
import classes from './ProductGrocerMain.module.css'
import ProductGroceryCard from './ProductGroceryCard/ProductGroceryCard'
import ProductIcon from '../../assets/haldirams.jpeg'

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
            }
        ]
    }
    render(){


        return(
            <div className={classes.Container}>
                <div className={classes.Menu}>
                    <div className={ this.state.active==='snacks' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem} onClick={() => this.setState({...this.state, active : 'snacks'})}>
                        <span>Snacks</span>
                    </div>
                    <div className={ this.state.active==='dairy' ? `${classes.MenuItem} ${classes.active}` : classes.MenuItem} onClick={() => this.setState({...this.state, active : 'dairy'})}>
                        <span>Dairy & Eggs</span>
                    </div>
                    <div className={classes.MenuItem}>
                        <span>Breakfast</span>
                    </div>
                    <div className={classes.MenuItem}>
                        <span>Health & Wellness</span>
                    </div>
                    <div className={classes.MenuItem}>
                        <span>Bakery</span>
                    </div>
                    <div className={classes.MenuItem}>
                        <span>Sauce & Dips</span>
                    </div>
                </div>
                <div className={classes.HRLine}></div>
                <div className={classes.Main}>
                    {
                        this.state.products.map((iterator, index) => {
                            if(iterator.category===this.state.active) {
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

export default ProductGroceryMain