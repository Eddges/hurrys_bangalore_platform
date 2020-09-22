import React from 'react'
import classes from './Cart.module.css'
import haldirams from '../../assets/haldirams.jpeg'
import CartItems from './CartItems/CartItems'
import CartCard from './CartCard/CartCard'
import { NavLink } from 'react-router-dom'

class Cart extends React.Component{
    state = {
        show : true,
        products : [
            {
                shop : 'Bangalore Bazaar',
                delivery : '2 hour',
                distance : '7 km',
                items : [
                            {
                                id : '1456',
                                category : 'dairy',
                                icon : haldirams,
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
                                icon : haldirams,
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
        ]
    }

    handleCartBack = () => {
        this.setState({
            ...this.state,
            show : false
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Backdrop}></div>
                <div className={classes.Main}>
                    {
                        this.state.products.map((iterator, index) => {
                                return(
                                    <CartCard {...iterator} key={index} />
                                )
                        })
                    }
                    <button className={classes.ExitButton} onClick={this.props.handleCartBack}>Back</button>
                    <NavLink to="/checkout" className={classes.ExitButton} onClick={this.props.handleCartBack}>Checkout</NavLink>
                </div>
            </div>
        )
    }
}

export default Cart