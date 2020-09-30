import React from 'react'
import Footer from '../Footer/Footer'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './ProductDetails.module.css'
import Haldirams from '../../assets/haldirams.jpeg'
import {connect} from 'react-redux'
import {database} from '../../firebase'

class ProductDetails extends React.Component{

    state = {
        product : this.props.red.selectedShop.Products[this.props.red.productId],
        current : this.props.red.current,
        // current : this.props.productsList.Weights[Object.keys(this.props.productsList.Weights)[0]],
        showAdd : true,
        quantity : 1
    }

    handleAdd = (current) => {
        console.log('UserId', this.props.user.UserId)
        console.log('PushId', this.state.current.PushId)
        console.log('Quantity : ', this.state.quantity, ' Price : ', Number(this.state.current.Price))
        this.setState({
            ...this.state,
            quantity : 1,
            showAdd : false,
            current : current
        })
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(this.props.red.productId).child(this.state.current.PushId).set(this.state.current)
        .then((result) => {
            console.log('Result : ', result)
            // this.props.onChangeTotal(this.state.current.Price)
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

    componentDidMount() {
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(this.props.red.productId).child(this.state.current.PushId).on('value', snapshot => {
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
        console.log(this.props.red.selectedShop)
        return(
            <div className={classes.Container}>
                <NavbarAlt />
                <div className={classes.Main}>
                    <div className={classes.Left}>
                        <img src={this.state.product.ItemImage1} alt="Product Image" />
                    </div>
                    <div className={classes.Right}>
                        <div className={classes.Brand}>
                            {/* <div className={classes.Veg} style={{border : `${this.props.currentProduct.veg ? 'solid 2px #7ed321' : 'solid 2px red'}`}}><div className={classes.VegCircle} style={{backgroundColor : `${this.props.currentProduct.veg ? '#7ed321' : 'red'}`}}></div></div> */}
                            <span>{this.state.product.Manufacture}</span>
                        </div>
                        <span className={classes.ProductName}></span>
                        <div className={classes.VarietyTable}>

                            {
                                Object.keys(this.state.product.Weights).map((iterator, index) => (
                                    <div className={classes.Item}>
                                        <span className={classes.ItemLeft}>{this.state.product.Weights[iterator].Name}</span>
                                        <span className={classes.ItemMiddle}>£ {this.state.product.Weights[iterator].Price} </span>
                                        {
                                            this.state.showAdd ? 
                                            <button className={classes.ButtonAdd} onClick={() => {this.handleAdd(this.state.products.Weights[iterator])}} >ADD</button>
                                            : 
                                            <div className={classes.Quantity}>
                                                <span className={classes.Highlite} onClick={() => this.handleDecrease(this.props.red.productId, this.state.current.PushId)}>-</span>
                                                <span className={classes.Quant}>{this.state.quantity ? this.state.quantity : 1}</span>
                                                <span className={classes.Highlite} onClick={() => this.handleIncrease(this.props.red.productId, this.state.current.PushId)}>+</span>
                                            </div>
                                        }
                                    </div>
                                ))
                            }


                        </div>
                        <span className={classes.HRLine}></span>

                        <div className={classes.Details}>
                            <div className={classes.DetailsItem}>
                                <span className={classes.DetailsLeft}>Name </span>
                                <span className={classes.DetailsRight}>{this.state.product.ItemName}</span>
                            </div>
                            <div className={classes.DetailsItem}>
                                <span className={classes.DetailsLeft}>Type </span>
                                <span className={classes.DetailsRight}>{this.state.product.SubCategory}</span>
                            </div>
                            <div className={classes.DetailsItem}>
                                <span className={classes.DetailsLeft}>Brand </span>
                                <span className={classes.DetailsRight}>{this.state.product.Manufacturer}</span>
                            </div>
                        {/* {
                            this.props.currentProduct.details.map((iterator, index) => (
                                <div className={classes.DetailsItem}>
                                    <span className={classes.DetailsLeft}>{Object.keys(iterator)[0]}</span>
                                    <span className={classes.DetailsRight}>{Object.values(iterator)[0]}</span>
                                </div>
                            ))
                        } */}
                        </div>
                        <span className={classes.HRLine}></span>
                        <div className={classes.Description}>
                            <span className={classes.DescriptionHeading}>Description</span>
                            <span className={classes.DescriptionContent}>{this.state.product.ItemDescription}</span>
                        </div>
                        <span className={classes.HRLine}></span>
                        <div className={classes.Features}>
                            <span className={classes.FeaturesHeading}>Key Features</span>
                            <span>{this.state.product.Features}</span>
                            {/* {
                                this.props.currentProduct.features.map((iterator, index) => (
                                    <div className={classes.FeaturesItem}>
                                        <div className={classes.FeaturesItemLeft}><ion-icon name="checkmark"></ion-icon></div>
                                        <div className={classes.FeaturesItemRight}>
                                            <span className={classes.FeaturesItemHeading}>{Object.keys(iterator)[0]}</span>
                                            <span className={classes.FeaturesItemContent}>{Object.values(iterator)[0]}</span>
                                        </div>
                                    </div>
                                ))
                            } */}

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        // currentProduct : state.red.currentProduct,
        user : state.usr,
        red : state.red
    }
}

export default connect(mapStateToProps)(ProductDetails)