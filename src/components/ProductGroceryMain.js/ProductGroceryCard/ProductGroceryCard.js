import React from 'react'
import classes from './ProductGroceryCard.module.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {database} from '../../../firebase'

class ProductGroceryCard extends React.Component {

    state={
        current : this.props.productsList.Weights[Object.keys(this.props.productsList.Weights)[0]],
        showOption : false,
        showAdd : true,
        quantity : 1
    }

    handleOptionSelect = (iterator) => {
        console.log('current : ', this.state.current)
        console.log('Show Options' , this.state.showOption)
        this.setState({
            showOption : false,
            current : this.props.productsList.Weights[iterator]
        })
    }

    handleAdd = () => {
        console.log('UserId', this.props.user.UserId)
        console.log('PushId', this.state.current.PushId)
        console.log('Quantity : ', this.state.quantity, ' Price : ', Number(this.state.current.Price))
        this.setState({
            ...this.state,
            quantity : 1,
            showAdd : false
        })
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(this.props.productId).child(this.state.current.PushId).set(this.state.current)
        .then((result) => {
            console.log('Result : ', result)
            this.props.onChangeTotal(this.state.current.Price)
        })
        .catch(err => console.log(err))
    }

    handleIncrease = (productId, pushId) => {
        console.log('ShopID : ', productId, ' ProductId  ', pushId)
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(productId).child(pushId).child('quantity').once('value', snapshot => {
            console.log('Snapshot', snapshot.val())
            let quantity = snapshot.val() ? snapshot.val() + 1 : 2
            database.ref('/Users').child(this.props.user.UserId).child('Cart').child(productId).child(pushId).child('quantity').set(quantity)
            .then(() => {
                this.setState({
                    ...this.state,
                    quantity : quantity
                })
            })
        })

    }

    handleDecrease = (productId, pushId) => {
        console.log('ShopID : ', productId, ' ProductId  ', pushId)
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(productId).child(pushId).child('quantity').once('value', snapshot => {
            console.log('Snapshot', snapshot.val())
            let quantity = snapshot.val() - 1
            if(quantity===0) {
                this.setState({
                    ...this.state,
                    showAdd : true,
                    quantity : 0
                }, () => {
                    database.ref('/Users').child(this.props.user.UserId).child('Cart').child(productId).child(pushId).set(null)
                })
            }
            else{
                database.ref('/Users').child(this.props.user.UserId).child('Cart').child(productId).child(pushId).child('quantity').set(quantity)
                .then(() => {
                    this.setState({
                        ...this.state,
                        quantity : quantity
                    })
                })
            }

        })
    }

    handleIconClick = () => {
        window.scroll(0,0)
        this.props.changeProduct(this.props.productId, this.state.current)
    }

    componentDidMount() {
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(this.props.productId).child(this.state.current.PushId).on('value', snapshot => {
            if(snapshot.val()){
                console.log('Product exists in the cart')
                this.setState({
                    ...this.state,
                    showAdd : false,
                    quantity : snapshot.val().quantity
                })
            }
            else if(!snapshot.val()) {
                console.log('Product does not exist')
                this.setState({
                    ...this.state,
                    showAdd : true,
                    quantity : 0
                })
            }
        })
    }

    render(){
        console.log('Card props : ', this.props)
        return(
            <div  className={classes.Container}>
            {
                this.props.few ?
                    <span className={classes.Few}>ONLY FEW LEFT</span> : 
                    null
            }
                
                <NavLink to='/product' className={classes.Icon} onClick={this.handleIconClick} >
                    <img src={this.props.productsList.ItemImage1} alt="Product Icon" />
                </NavLink>
                <div className={classes.Details}>
                    <div className={classes.Brand}>
                        <div className={classes.VegBorder}><div className={classes.VegDot}></div></div>
                        <span>{this.props.productsList.ItemName}</span>
                    </div>
                    <span className={classes.Name}>{this.props.productsList.ItemDescription}</span>
                    <div className={classes.OptionsSelector} onClick={() => { this.setState({...this.state, showOption : true})}}>
                        <span>{this.state.current.Name}</span>
                        <span className={classes.Triangle}></span>


                    </div>
                    <div className={classes.HRLine}></div>
                    {
                            this.state.showOption ? 
                                <div className={classes.Options}>
                                    {Object.keys(this.props.productsList.Weights).map((iterator, i) => {
                                    return (
                                        <div key={i} className={classes.Option} onClick={() => this.handleOptionSelect(iterator)}>
                                            <span>{this.props.productsList.Weights[iterator].Name}</span>
                                            <div className={classes.Prices}>
                                                <span>{this.props.productsList.Weights[iterator].Price}</span>
                                                
                                            </div>
                                        </div>
                                    )})}
                                </div>
                            : null
                        }
                    <div className={classes.Prices}>
                        <div className={classes.Left}>
                            <span className={classes.TruePrice}>£ {this.state.showAdd ? this.state.current.Price  : `${this.state.quantity*Number(this.state.current.Price) ? this.state.quantity*Number(this.state.current.Price) : this.state.current.Price}`}</span>
                            {/* <span className={classes.StdPrice}>₹{this.state.current.stdPrice}</span> */}
                        </div>
                        {
                            this.state.showAdd ? 
                            <button className={classes.ButtonAdd} onClick={this.handleAdd} >ADD</button>
                            : 
                            <div className={classes.Quantity}>
                                <span className={classes.Highlite} onClick={() => this.handleDecrease(this.props.productId, this.state.current.PushId)}>-</span>
                                <span className={classes.Quant}>{this.state.quantity ? this.state.quantity : 1}</span>
                                <span className={classes.Highlite} onClick={() => this.handleIncrease(this.props.productId, this.state.current.PushId)}>+</span>
                            </div>
                        }
                        
                    </div>
                </div>
    
            </div>
        )
    }
}

{/* <span>{iterator.stdprice}</span> */}

const mapStateToProps = state => {
    return{
        red : state.red,
        user : state.usr
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChangeTotal : (price) => dispatch({
            type : 'CHANGE_TOTAL',
            payload : price
        }),
        changeProduct : (id, current) => dispatch({
            type : 'CHANGE_PRODUCT_ID',
            payload : id,
            current : current
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGroceryCard)