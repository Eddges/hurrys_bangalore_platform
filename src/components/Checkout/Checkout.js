import React from 'react'
import Cart from '../Cart/Cart'
import CartCard from '../Cart/CartCard/CartCard'
import Footer from '../Footer/Footer'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './Checkout.module.css'
import haldirams from '../../assets/haldirams.jpeg'
import deliveryLocation from '../../assets/deliveryLocation.svg'
import PaymentAccordion from '../PaymentAccordion/PaymentAccordion'
import AddressSelector from '../AddressSelector/AddressSelector'
import {connect} from 'react-redux'

class Checkout extends React.Component{
    state = {
        deliveryOpen : true,
        showAddressModal : false,
        show : true,
        address : this.props.user.address,
        modalAddress : null
    }

    handleDeliveryAccordion = () => {
        this.setState({
            ...this.state,
            deliveryOpen : !this.state.deliveryOpen
        })
    }

    modalClose = () => {
        this.setState({
            ...this.state,
            showAddressModal : false
        })
    }

    modalAddress = (lat, lng, add) => {
        console.log('Modal address : ', lat, lng, add)
        this.setState({
            ...this.state,
            modalAddress : {
                latitude : lat,
                longitude : lng,
                address : add
            }
        }, () => {
            console.log('State modal address ', this.state.modalAddress)
            this.props.pushAddress({
                latitude : lat,
                longitude : lng,
                address : add
            })
        })
    }
    
    addAddress = () => {
        this.setState({
            ...this.state,
            showAddressModal : true
        })
    }

    showAddress = () => {
        console.log('User address : ', this.props.user.address)
        this.props.user.address.map((iterator) => {
            console.log('Iterating : ', iterator)
        })
    }


    render(){
        return(
            <div className={classes.Container}>
                <NavbarAlt />
                    {
                        this.state.showAddressModal ? 
                        <AddressSelector modalClose={this.modalClose} modalAddress={this.modalAddress} />
                        : null
                    }
                    <div className={classes.Main}>
                        <div className={classes.Left}>

                            <div className={classes.Accordion} >
                                <div className={classes.AccordionTop} onClick={this.handleDeliveryAccordion}>
                                    <div className={classes.AccordionTopText}>
                                        <img src={deliveryLocation} alt="Delivery Icon" />
                                        <span>Delivery Address</span>
                                    </div>
                                    <ion-icon name={this.state.deliveryOpen ? "chevron-up-sharp" : "chevron-down-sharp"}></ion-icon>
                                </div>
                                <div className={this.state.deliveryOpen ? `${classes.AccordionDrop} ${classes.AccordionDropExpand}` : `${classes.AccordionDrop}`}>
                                {
                                    this.props.user.address.map((iterator, index) => {
                                        return(
                                            <div className={classes.AddressDropItem}>
                                                <div className={classes.AddressDropItemLeft}>
                                                    <input type="checkbox" />
                                                    <div className={classes.AddressDropMiddle}>
                                                        <span className={classes.AddressDropDetail}>{iterator.address}</span>
                                                    </div>
                                                </div>
                                                <button type="button">EDIT</button>
                                            </div>
                                        )
                                    })
                                }
                                    {/* {
                                        this.props.user.address!=[] ? 
                                        this.props.user.address.map((iterator, index) => {
                                            return(
                                                <div className={classes.AddressDropItem}>
                                                    <div className={classes.AddressDropItemLeft}>
                                                        <input type="checkbox" />
                                                        <div className={classes.AddressDropMiddle}>
                                                            <span className={classes.AddressDropDetail}>{iterator.address}</span>
                                                        </div>
                                                    </div>
                                                    <button type="button">EDIT</button>
                                                </div>
                                            )
                                        })
                                        :
                                        <span>Please add a new address</span>
                                    } */}

                                    {/* <div className={classes.AddressDropItem}>
                                        <div className={classes.AddressDropItemLeft}>
                                            <input type="checkbox" />
                                            <div className={classes.AddressDropMiddle}>
                                                <span className={classes.AddressDropDetail}>TK Towers, HSR Layout, Whitefield </span>
                                            </div>
                                        </div>
                                        <button type="button">EDIT</button>
                                    </div> */}

                                    <div className={classes.DeliveryControls}>
                                        <button className={classes.AddressAdd} onClick={this.addAddress} >+ ADD NEW ADDRESS</button>
                                        <button className={classes.AddressContinue}>CONTINUE</button>
                                    </div>

                                </div>
                            </div>

                            <div className={classes.HRLine}></div>
                            
                            <PaymentAccordion />
                        </div>
                        <div className={classes.VerticalLine}></div>
                        <div className={classes.Right}>
                            <CartCard showTotal={false} />

                            <div className={classes.Tip}>
                                <span className={classes.TipHeading}>Tip your delivery executive</span>
                                <span className={classes.TipText}>Thank your delivery executive in these tough times by paying a small amount to help</span>
                                <div className={classes.TipButtons}>
                                    <button className={classes.TipButton}>1</button>
                                    <button className={classes.TipButton}>2</button>
                                    <button className={classes.TipButton}>3</button>
                                    <button className={classes.TipButton}>4</button>
                                    <input className={classes.TipInput} placeholder="Custom" />
                                </div>
                                <div className={classes.OrderTotal}>
                                    <div className={classes.ItemTotal}>
                                        <span className={classes.ItemTotalText}>Item Total</span>
                                        <span className={classes.ItemTotalTotal}>₹120</span>
                                    </div>
                                    <div className={classes.ItemOther}>
                                        <span className={classes.ItemOtherText}>Total Discount</span>
                                        <span className={classes.ItemOtherTotal}>-₹30</span>
                                    </div>
                                    <div className={classes.ItemOther}>
                                        <span className={classes.ItemOtherText}>Delivery Charges</span>
                                        <span className={classes.ItemOtherTotal}>FREE</span>
                                    </div>
                                    <div className={classes.ItemOther}>
                                        <span className={classes.ItemOtherText}>Packing Charges</span>
                                        <span className={classes.ItemOtherTotal}>₹12</span>
                                    </div>
                                </div>

                                <div className={classes.FinalTotal}>
                                    <span className={classes.FinalTotalHeading}>Total Payable</span>
                                    <span className={classes.FinalTotalTotal} onClick={this.showAddress}>₹234</span>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user : state.usr, 
        red : state.red
    }
}

const mapDispatchToProps = dispatch => {
    return{
        pushAddress : (address) => dispatch({
            type : 'PUSH_ADDRESS',
            payload : address
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)