import React from 'react'
import classes from './CartItems.module.css'

class CartItems extends React.Component {

    state={
        current : this.props.options[0],
        showOption : false
    }

    handleOptionSelect = (i) => {
        console.log('current : ', this.state.current)
        console.log('Show Options' , this.state.showOption)
        this.setState({
            showOption : false,
            current : this.props.options[i]
        })
    }

    render(){
        return(
            <div className={classes.Container}>
            {
                this.props.few ?
                    <span className={classes.Few}>ONLY FEW LEFT</span> : 
                    null
            }
                
                <div className={classes.Icon}>
                    <img src={this.props.icon} alt="Product Icon" />
                </div>
                <div className={classes.Right}>
                    <div className={classes.Details}>
                        <span classname={classes.PdtName}>{this.props.name}</span>
                        <div className={classes.OptionsSelector} onClick={() => { this.setState({...this.state, showOption : true})}}>
                            <span>{this.state.current.value}</span>
                            <span className={classes.Triangle}></span>


                        </div>
                        {
                                this.state.showOption ? 
                                    <div className={classes.Options}>
                                        {this.props.options.map((iterator, i) => {
                                        return (
                                            <div key={i} className={classes.Option} onClick={() => this.handleOptionSelect(i)}>
                                                <span>{iterator.value}</span>
                                                <div className={classes.Prices}>
                                                    <span>{iterator.price}</span>
                                                    <span>{iterator.stdprice}</span>
                                                </div>
                                            </div>
                                        )})}
                                    </div>
                                : null
                            }

                    </div>
                    <div className={classes.Quantity}>
                        <span className={classes.Highlite}>-</span>
                        <span className={classes.Quant}>1</span>
                        <span className={classes.Highlite}>+</span>
                    </div>
                    <div className={classes.Prices}>
                            <span className={classes.TruePrice}>₹ {this.state.current.price}</span>
                            <span className={classes.StdPrice}>₹{this.state.current.stdPrice}</span>
                    </div>
                </div>

    
            </div>
        )
    }
}

export default CartItems