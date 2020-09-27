import React from 'react'
import classes from './CartCard.module.css'
import CardItems from '../CartItems/CartItems'
import {connect} from 'react-redux'
import {database} from '../../../firebase'

class CartCard extends React.Component {
    state = {
        store : this.props.red.selectedShop,
        cart : null,
        structure : []
    }

    componentDidMount(){
        console.log(this.props.red)
        database.ref('/Users').child(this.props.user.UserId).child('Cart').on('value', snapshot => {
            Object.keys(snapshot.val()).map((iterator, index) => {
                database.ref('/Vendor').child(this.props.red.selectedShop.shopId).child('Products').child(iterator).once('value')
                .then(snapshot_v => {
                    const x = this.state.structure
                    const item = {
                        id : iterator,
                        icon : snapshot_v.val().ItemImage1,
                        name : snapshot_v.val().ItemName,
                        items : []
                    }
                    Object.keys(snapshot.val()[iterator]).map(i => {
                        item.items.push(snapshot.val()[iterator][i])
                    })
                    x.push(item)
                    this.setState({
                        ...this.state,
                        structure : x
                    }, state => {
                        console.log('Structure : ', this.state.structure)
                    })
                })
            })
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Top}>
                    <div className={classes.Shop}>
                        <span className={classes.Name}>{this.state.store ? this.state.store.Name : null}</span>
                        <span className={classes.Details}>{this.state.store ? this.state.store.DeliveryTime : null} mins delivery | {this.state.store ? this.state.store.d.toFixed(1) : null} miles away</span>
                    </div>
                    {/* <button className={classes.ButtonAddMore}>+ ADD MORE</button> */}
                </div>

                <div className={classes.Mid}>
                    <div className={classes.MidTop}>
                        <span className={classes.ItemCount}>{this.props.items.length} ITEMS</span>
                        <button>CLEAR</button>
                    </div>
                    <div className={classes.MidMid}>
                        {/* {
                            this.props.items.map((iterator, index) => {

                                    return(
                                        <CardItems key={index} {...iterator}  />
                                    )
                                
                            })
                        } */}
                        {
                            this.state.structure ? 
                            this.state.structure.map((iterator) => {
                                return(
                                    iterator.items.map((i, index) => <CardItems key={index} icon={iterator.icon} name={iterator.name} price={i.Price} quant={i.Name} />)

                                )
                            })
                            : 
                            <span>Cart is empty</span>
                        }
                    </div>

                </div>
                <div className={classes.HRLine}></div>
                {/* <div className={classes.Cutlery}>
                    <input type="checkbox" />
                    <div className={classes.CutleryText}>
                        <span className={classes.Span1}>Include Cutlery</span>
                        <span className={classes.Span2}>Refuse cutlery, go eco-friendly & save ₹3</span>
                    </div>
                    <span className={classes.CutleryPrice}>₹3</span>
                </div> */}
                <div className={classes.HRLine}></div>
                <div className={classes.Total}>
                    <span>Total</span>
                    <span>₹ 363</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user : state.usr,
        red : state.red
    }
}

const mapDispatchToProps = dispatch => {
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)   