import React from 'react'
import classes from './ProductGroceryCard.module.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {database} from '../../../firebase'

class ProductGroceryCard extends React.Component {

    state={
        current : this.props.productsList.Weights[Object.keys(this.props.productsList.Weights)[0]],
        showOption : false
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
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(this.props.productId).child(this.state.current.PushId).set(this.state.current)
        .then((result) => {
            console.log('Result : ', result)
            this.props.onChangeTotal(this.state.current.Price)
        })
        .catch(err => console.log(err))
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
                
                <div className={classes.Icon}>
                    <img src={this.props.productsList.ItemImage1} alt="Product Icon" />
                </div>
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
                            <span className={classes.TruePrice}>₹ {this.state.current.Price}</span>
                            {/* <span className={classes.StdPrice}>₹{this.state.current.stdPrice}</span> */}
                        </div>
                        <button className={classes.ButtonAdd} onClick={this.handleAdd} >ADD</button>
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
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGroceryCard)