import React from 'react'
import Cart from '../Cart/Cart'
import CartCard from '../Cart/CartCard/CartCard'
import Footer from '../Footer/Footer'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './Checkout.module.css'
import haldirams from '../../assets/haldirams.jpeg'
import deliveryLocation from '../../assets/deliveryLocation.svg'
import payment from '../../assets/payment.jpeg'
import debitCard from '../../assets/debitCard.svg'

class Checkout extends React.Component{
    state = {
        deliveryOpen : true,
        paymentOpen : false,
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

    handleDeliveryAccordion = () => {
        this.setState({
            ...this.state,
            deliveryOpen : !this.state.deliveryOpen
        })
    }
    handlePaymentAccordion = () => {
        this.setState({
            ...this.state,
            paymentOpen : !this.state.paymentOpen
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <NavbarAlt />
                    <div className={classes.Main}>
                        <div className={classes.Left}>

                            <div className={classes.Accordion} onClick={this.handleDeliveryAccordion}>
                                <div className={classes.AccordionTop}>
                                    <div className={classes.AccordionTopText}>
                                        <img src={deliveryLocation} alt="Delivery Icon" />
                                        <span>Delivery Address</span>
                                    </div>
                                    <ion-icon name={this.state.deliveryOpen ? "chevron-up-sharp" : "chevron-down-sharp"}></ion-icon>
                                </div>
                                <div className={this.state.deliveryOpen ? `${classes.AccordionDrop} ${classes.AccordionDropExpand}` : `${classes.AccordionDrop}`}>

                                    <div className={classes.AddressDropItem}>
                                        <div className={classes.AddressDropItemLeft}>
                                            <input type="checkbox" />
                                            <div className={classes.AddressDropMiddle}>
                                                <span>Home</span>
                                                <span className={classes.AddressDropDetail}>TK Towers, HSR Layout, Whitefield </span>
                                            </div>
                                        </div>
                                        <button type="button">EDIT</button>
                                    </div>
                                    <div className={classes.AddressDropItem}>
                                        <div className={classes.AddressDropItemLeft}>
                                            <input type="checkbox" />
                                            <div className={classes.AddressDropMiddle}>
                                                <span>Home</span>
                                                <span className={classes.AddressDropDetail}>TK Towers, HSR Layout, Whitefield </span>
                                            </div>
                                        </div>
                                        <button type="button">EDIT</button>
                                    </div>
                                    <div className={classes.AddressDropItem}>
                                        <div className={classes.AddressDropItemLeft}>
                                            <input type="checkbox" />
                                            <div className={classes.AddressDropMiddle}>
                                                <span>Home</span>
                                                <span className={classes.AddressDropDetail}>TK Towers, HSR Layout, Whitefield </span>
                                            </div>
                                        </div>
                                        <button type="button">EDIT</button>
                                    </div>

                                    <div className={classes.DeliveryControls}>
                                        <button className={classes.AddressAdd}>+ ADD NEW ADDRESS</button>
                                        <button className={classes.AddressContinue}>CONTINUE</button>
                                    </div>

                                </div>
                            </div>

                            <div className={classes.HRLine}></div>
                            
                            <div className={classes.Accordion} onClick={this.handlePaymentAccordion}>
                                <div className={classes.AccordionTop}>
                                    <div className={classes.AccordionTopText}>
                                        <img src={payment} alt="Payment Icon" />
                                        <span>Payment Method</span>
                                    </div>
                                    <ion-icon name={this.state.paymentOpen ? "chevron-up-sharp" : "chevron-down-sharp"}></ion-icon>
                                </div>
                                <div className={this.state.paymentOpen ? `${classes.AccordionDrop} ${classes.AccordionDropExpand}` : `${classes.AccordionDrop}`}>

                                    <div className={classes.PaymentDropItem}>
                                        <input type="checkbox" />
                                        <img src={debitCard} alt="Debit Card" />
                                        <span>Debit/Credit Card</span>
                                    </div>
                                    <div className={classes.PaymentDropItem}>
                                        <input type="checkbox" />
                                        <img src={debitCard} alt="Debit Card" />
                                        <span>Debit/Credit Card</span>
                                    </div>
                                    <div className={classes.PaymentDropItem}>
                                        <input type="checkbox" />
                                        <img src={debitCard} alt="Debit Card" />
                                        <span>Debit/Credit Card</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={classes.VerticalLine}></div>
                        <div className={classes.Right}>
                            {
                                this.state.products.map((iterator, index) => {
                                        return(
                                            <CartCard {...iterator} key={index} showTotal={false} />
                                        )
                                })
                            }

                            <div className={classes.Tip}>
                                <span className={classes.TipHeading}>Tip your delivery executive</span>
                                <span className={classes.TipText}>Thank your delivery executive in these tough times by paying a small amount to help</span>
                                <div className={classes.TipButtons}>
                                    <button className={classes.TipButton}>₹10</button>
                                    <button className={classes.TipButton}>₹20</button>
                                    <button className={classes.TipButton}>₹30</button>
                                    <button className={classes.TipButton}>₹40</button>
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
                                    <span className={classes.FinalTotalTotal}>₹234</span>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Checkout