import React from 'react'
import AddressSelector from '../AddressSelector/AddressSelector'
import classes from './ProfileManageAddress.module.css'
import {connect} from 'react-redux'
import deleteIcon from '../../assets/delete.svg'
import addressIcon from '../../assets/addAddress.png'

class ProfileManageAddress extends React.Component{
    state = {
        showAddressModal : false,
        address : this.props.user.address,
        modalAddress : null,
        distance : 0
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
            const LocationArray = this.props.red.selectedShop.Location.split(',')
            const shopLat = LocationArray[0]
            const shopLng = LocationArray[1]
            const userLat = this.props.user.address[this.props.user.address.length - 1].latitude
            const userLng = this.props.user.address[this.props.user.address.length - 1].longitude

        })
    }

    deg2rad = (deg) => {
        return deg * (Math.PI/180)
      }

    handleModalOpen = () => {
        this.setState({
            ...this.state,
            showAddressModal : true
        })
    }

    removeAddress = (address) => {

    }


    render() {
        return(
            <div className={classes.Container}>
                {
                    this.state.showAddressModal ? 
                    <AddressSelector modalClose={this.modalClose} modalAddress={this.modalAddress} />
                    : null
                }
                {
                    this.props.user.address.map((iterator, index) => {
                        console.log('Address Iterator : ', iterator)
                        return(
                            <div className={classes.AddressItem}>
                                <div className={classes.AddressDropItemLeft}>
                                    <div className={classes.AddressName}>
                                        <span>Address {+index + 1}</span>
                                        <img src={deleteIcon} alt="Delete Icon" onClick={() => this.props.removeAddress(iterator.address)} />
                                    </div>
                                    <div className={classes.AddressMiddle}>
                                        <span className={classes.AddressDropDetail}>{iterator.address}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className={classes.AddressAdd} onClick={this.handleModalOpen}>
                    <img className={classes.AddAddressImage} src={addressIcon} alt="Address Icon" />
                </div>
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
        }),
        setDeliveryCost : (cost) => dispatch({
            type : 'SET_DELIVERY_COST',
            payload : cost
        }),
        removeAddress : (address) => dispatch({
            type : 'REMOVE_ADDRESS',
            payload : address
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileManageAddress)