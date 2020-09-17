import React from 'react'
import Footer from '../Footer/Footer'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './ProductDetails.module.css'
import Haldirams from '../../assets/haldirams.jpeg'
import {connect} from 'react-redux'

class ProductDetails extends React.Component{

    

    render(){
        console.log(this.props.currentProduct)
        return(
            <div className={classes.Container}>
                <NavbarAlt />
                <div className={classes.Main}>
                    <div className={classes.Left}>
                        <img src={Haldirams} alt="Product Image" />
                    </div>
                    <div className={classes.Right}>
                        <div className={classes.Brand}>
                            <div className={classes.Veg} style={{border : `${this.props.currentProduct.veg ? 'solid 2px #7ed321' : 'solid 2px red'}`}}><div className={classes.VegCircle} style={{backgroundColor : `${this.props.currentProduct.veg ? '#7ed321' : 'red'}`}}></div></div>
                            <span>{this.props.currentProduct.brand}</span>
                        </div>
                        <span className={classes.ProductName}>{this.props.currentProduct.productName}</span>
                        <div className={classes.VarietyTable}>

                            {
                                this.props.currentProduct.varieties.map((iterator, index) => (
                                    <div className={classes.Item}>
                                        <span className={classes.ItemLeft}>{iterator.quantity}</span>
                                        <span className={classes.ItemMiddle}>₹{iterator.price} <span>₹{iterator.wrongPrice}</span></span>
                                        <button className={classes.AddButton}>ADD</button>
                                    </div>
                                ))
                            }


                        </div>
                        <span className={classes.HRLine}></span>

                        <div className={classes.Details}>
                        {
                            this.props.currentProduct.details.map((iterator, index) => (
                                <div className={classes.DetailsItem}>
                                    <span className={classes.DetailsLeft}>{Object.keys(iterator)[0]}</span>
                                    <span className={classes.DetailsRight}>{Object.values(iterator)[0]}</span>
                                </div>
                            ))
                        }
                        </div>
                        <span className={classes.HRLine}></span>
                        <div className={classes.Description}>
                            <span className={classes.DescriptionHeading}>Description</span>
                            <span className={classes.DescriptionContent}>{this.props.currentProduct.description}</span>
                        </div>
                        <span className={classes.HRLine}></span>
                        <div className={classes.Features}>
                            <span className={classes.FeaturesHeading}>Key Features</span>
                            {
                                this.props.currentProduct.features.map((iterator, index) => (
                                    <div className={classes.FeaturesItem}>
                                        <div className={classes.FeaturesItemLeft}><ion-icon name="checkmark"></ion-icon></div>
                                        <div className={classes.FeaturesItemRight}>
                                            <span className={classes.FeaturesItemHeading}>{Object.keys(iterator)[0]}</span>
                                            <span className={classes.FeaturesItemContent}>{Object.values(iterator)[0]}</span>
                                        </div>
                                    </div>
                                ))
                            }

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
        currentProduct : state.currentProduct
    }
}

export default connect(mapStateToProps)(ProductDetails)