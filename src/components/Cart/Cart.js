import React from 'react'
import classes from './Cart.module.css'
import haldirams from '../../assets/haldirams.jpeg'
import CartItems from './CartItems/CartItems'
import CartCard from './CartCard/CartCard'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {database} from '../../firebase'

class Cart extends React.Component{
    state = {
        show : true,
        cart : null,
    }

    handleCartBack = () => {
        this.setState({
            ...this.state,
            show : false
        })
    }

    componentDidMount() {
        database.ref('/Users').child(this.props.user.UserId).child('Cart').once('value', snapshot => {
            console.log('User cart : ', snapshot.val())
            this.setState({
                ...this.state,
                cart : snapshot.val()
            })
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Backdrop}></div>
                <div className={classes.Main}>
                <CartCard  cart={this.state.cart} />
                    <button className={classes.ExitButton} onClick={this.props.handleCartBack}>Back</button>
                    <NavLink to="/checkout" className={classes.ExitButton} onClick={this.props.handleCartBack}>Checkout</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        red : state.red,
        user : state.usr
    }
}

const mapDispatchToProps = dispatch => {
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)