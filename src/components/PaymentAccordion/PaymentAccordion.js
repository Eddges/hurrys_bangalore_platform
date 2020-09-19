import React from 'react'
import classes from './PaymentAccordion.module.css'
import payment from '../../assets/payment.jpeg'
import debitCard from '../../assets/debitCard.svg'

class PaymentAccordion extends React.Component{
    state = {
        paymentOpen : false
    }

    handlePaymentAccordion = () => {
        this.setState({
            ...this.state,
            paymentOpen : !this.state.paymentOpen
        })
    }

    render() {
        return(
            




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













        )
    }
}

export default PaymentAccordion