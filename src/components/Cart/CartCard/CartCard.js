import React from 'react'
import classes from './CartCard.module.css'
import CardItems from '../CartItems/CartItems'
import {connect} from 'react-redux'
import {database} from '../../../firebase'

class CartCard extends React.Component {
    state = {
        store : this.props.red.selectedShop ? this.props.red.selectedShop : 'Empty',
        cart : null,
        structure : [],
        cost : 0
    }

    handleIncrease = (shopId, productId) => {
        console.log('ShopID : ', shopId, ' ProductId  ', productId)
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(shopId).child(productId).child('quantity').once('value', snapshot => {
            console.log('Snapshot', snapshot.val())
            let quantity = snapshot.val() ? snapshot.val() + 1 : 2
            this.state.structure.map((iterator, index) => {
                console.log('iterator : ', iterator)
                if(iterator.id === shopId) {
                    iterator.items.map((iterator_i, i) => {
                        if(iterator_i.PushId===productId) {
                            database.ref('/Users').child(this.props.user.UserId).child('Cart').child(shopId).child(productId).child('quantity').set(quantity)
                            let st = this.state.structure
                            st[index].items[i].quantity = quantity
                            this.setState({
                                ...this.state,
                                structure : st,
                                cost : this.state.cost + Number(st[index].items[i].Price)
                            }, () => {
                                this.props.changeTotal(this.state.cost)
                            } )
                        }
                    })
                }
            })
        })

    }

    handleDecrease = (shopId, productId) => {
        console.log(shopId, productId)
        database.ref('/Users').child(this.props.user.UserId).child('Cart').child(shopId).child(productId).child('quantity').once('value', snapshot => {
            console.log('Snapshot', snapshot.val())
            let quantity = snapshot.val() ? snapshot.val() - 1 : 0

            console.log('Quantity : ', quantity)
            if(quantity===0) {
                database.ref('/Users').child(this.props.user.UserId).child('Cart').child(shopId).child(productId).set(null)
                // let x = this.state.structure.map((iterator, index) => {
                //     if(iterator.id===shopId) {
                //         return iterator.items.filter((iterator_i, i) => {
                //             if(iterator_i.PushId!==productId) {
                //                 return true
                //             }
                //         })
                //     }
                // })
                // console.log('value of x : ', x)
            }
            else{
                this.state.structure.map((iterator, index) => {
                    console.log('iterator : ', iterator)
                    if(iterator.id === shopId) {
                        iterator.items.map((iterator_i, i) => {
                            if(iterator_i.PushId===productId) {
                                database.ref('/Users').child(this.props.user.UserId).child('Cart').child(shopId).child(productId).child('quantity').set(quantity)
                                let st = this.state.structure
                                st[index].items[i].quantity = quantity
                                this.setState({
                                    ...this.state,
                                    structure : st,
                                    cost : this.state.cost - Number(st[index].items[i].Price)
                                })
                            }
                        })
                    }
                })
            }
            
        })

    }

    clearCart = () => {
        database.ref('/Users').child(this.props.user.UserId).child('Cart').set(null)
        this.setState({
            ...this.state,
            cost : 0,
            structure : []
        })
    }

    componentDidMount(){
        console.log(this.props.red)
        let total = 0
        database.ref('/Users').child(this.props.user.UserId).child('Cart').once('value', snapshot => {
            if(snapshot.val()){
                Object.keys(snapshot.val()).map((iterator, index) => {
                    database.ref('/Vendor').child(this.props.red.selectedShop.shopId).child('Products').child(iterator).on('value',
                    snapshot_v => {
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
                            this.state.structure.map((priceIterator, priceIndex) => {
                                priceIterator.items.map((itemsIterator, itemsIndex) => {
                                    let itemQuantity = itemsIterator.quantity ? itemsIterator.quantity : 1
                                    total = total + itemQuantity*Number(itemsIterator.Price)
                                })
                            })
                            this.setState({
                                ...this.state,
                                cost : total
                            })
                        })
                    })
                })
            }

        })
        

    }

    render(){
        let totalCost = 0
        return(
            <div className={classes.Container}>
                <div className={classes.Top}>
                    <div className={classes.Shop}>
                        <span className={classes.Name}>{this.state.store ? this.state.store.Name : null}</span>
                        <span className={classes.Details}>{this.state.store.DeliveryTime ? this.state.store.DeliveryTime : null} mins delivery | {this.state.store.d ? this.state.store.d.toFixed(1) : null} miles away</span>
                    </div>
                    {/* <button className={classes.ButtonAddMore}>+ ADD MORE</button> */}
                </div>

                <div className={classes.Mid}>
                    <div className={classes.MidTop}>
                        <span className={classes.ItemCount}>ITEMS</span>
                        <button type="button" onClick={this.clearCart} >CLEAR</button>
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
                            this.state.structure!==[] ? 
                            this.state.structure.map((iterator) => {
                                return(
                                    iterator.items.map((i, index) => {
                                        let quantity = i.quantity ? i.quantity : 1
                                        totalCost = quantity * i.Price                             
                                        console.log('i : ', i)
                                        return (<CardItems key={index} icon={iterator.icon} name={iterator.name} price={i.Price} quant={i.Name} quantity={i.quantity} shopId={iterator.id} productId={i.PushId} handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} />)})

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
                    <span onClick={() => {console.log(this.state.structure)}}>Total</span>
                    <span>£ {this.state.cost}</span>
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
        changeTotal : (price) => dispatch({
            type : 'CHANGE_TOTAL',
            payload : price
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)   