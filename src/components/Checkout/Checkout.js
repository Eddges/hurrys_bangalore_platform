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
import { getDistance } from 'geolib'
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap} from "react-google-maps"

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `0` }} />,
    containerElement: <div style={{ height: `0` }} />,
    mapElement: <div style={{ height: `0` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      const shopAddressArray = this.props.activeShopLocation.split(',')
      const shopLat = shopAddressArray[0]
      const shopLng = shopAddressArray[1]
      const userLat = this.props.userCurrentAddress.latitude
      const userLng = this.props.userCurrentAddress.longitude
        console.log('LAT AND LONG DETAILS : ', shopLat, shopLng, userLat, userLng)
      DirectionsService.route({
        origin: new window.google.maps.LatLng(shopLat, shopLng),
        destination: new window.google.maps.LatLng(userLat, userLng),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
            console.log('Result of direction request : ', result.routes[0].legs[0].distance.value)
            console.log('Props in maps : ', this.props)
            const distance = result.routes[0].legs[0].distance.value
            const d = this.props.d
            let deliveryCost = 0

            if(distance>d) {
                deliveryCost = (((distance/1000)-d) * 0.5).toFixed(2)
                console.log('Delivery Cost : ', deliveryCost)
            }
            else if(distance<=d) {
                deliveryCost = 0
                console.log('Delivery Cost : ', deliveryCost)
            }
            this.props.setDeliveryCost(deliveryCost)
        //   this.setState({
        //     directions: result.routes[0].legs[0].distance.value
        //   });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    },
    componentDidUpdate(){
        console.log('Props updated')
        const DirectionsService = new window.google.maps.DirectionsService();
      const shopAddressArray = this.props.activeShopLocation.split(',')
      const shopLat = shopAddressArray[0]
      const shopLng = shopAddressArray[1]
      const userLat = this.props.userCurrentAddress.latitude
      const userLng = this.props.userCurrentAddress.longitude
        console.log('LAT AND LONG DETAILS : ', shopLat, shopLng, userLat, userLng)
      DirectionsService.route({
        origin: new window.google.maps.LatLng(shopLat, shopLng),
        destination: new window.google.maps.LatLng(userLat, userLng),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
            console.log('Result of direction request : ', result.routes[0].legs[0].distance.value)
            console.log('Props in maps : ', this.props)
            const distance = result.routes[0].legs[0].distance.value
            const d = this.props.d
            let deliveryCost = 0

            if(distance>d) {
                deliveryCost = (((distance/1000)-d) * 0.5).toFixed(2)
                console.log('Delivery Cost : ', deliveryCost)
            }
            else if(distance<=d) {
                deliveryCost = 0
                console.log('Delivery Cost : ', deliveryCost)
            }
            this.props.setDeliveryCost(deliveryCost)
        //   this.setState({
        //     directions: result.routes[0].legs[0].distance.value
        //   });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props => {
    
    return(
        <React.Fragment></React.Fragment>
    )
}
    
);


class Checkout extends React.Component{
    state = {
        deliveryOpen : true,
        showAddressModal : false,
        show : true,
        address : this.props.user.address,
        modalAddress : null,
        distance : 0
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
            const LocationArray = this.props.red.selectedShop.Location.split(',')
            const shopLat = LocationArray[0]
            const shopLng = LocationArray[1]
            const userLat = this.props.user.address[this.props.user.address.length - 1].latitude
            const userLng = this.props.user.address[this.props.user.address.length - 1].longitude

            const distancce = getDistance(
                { latitude: shopLat, longitude: shopLng },
                { latitude: userLat, longitude: userLng }
            );
            console.log('Distance is : ', distancce)
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

    deg2rad = (deg) => {
        return deg * (Math.PI/180)
      }

    componentDidMount(){
        console.log('Distance ', this.state.distance)
    }

    render(){
        // if(this.props.user.address.length !== 0) {
        //     console.log('User address length : ', this.props.user.address.length)
        //     const LocationArray = this.props.red.selectedShop.Location.split(',')
        //     const shopLat = LocationArray[0]
        //     const shopLng = LocationArray[1]
        //     const userLat = this.props.user.address[this.props.user.address.length - 1].latitude
        //     const userLng = this.props.user.address[this.props.user.address.length - 1].longitude
        //     // console.log(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${shopLat},${shopLng}&destinations=${userLat},${userLng}&key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA`)
        //     fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${shopLat},${shopLng}&destinations=${userLat},${userLng}&key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA`)
        //     .then(response => {
        //         console.log(response.data)
        //     })
        // }
        // else{
        //     console.log('User Address length : 0')
        // }
        return(
            <div className={classes.Container}>
                <NavbarAlt />
                    {
                        this.state.showAddressModal ? 
                        <AddressSelector modalClose={this.modalClose} modalAddress={this.modalAddress} />
                        : null
                    }

                <MapWithADirectionsRenderer
                    d={this.props.red.selectedShop.d}
                    setDeliveryCost={this.props.setDeliveryCost}
                    activeShopLocation = {this.props.red.selectedShop.Location}
                    userCurrentAddress = {this.props.user.address[this.props.user.address.length - 1]}
                />

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

                        <div className={classes.Tip} onClick={this.fetchGoogle}>
                            {/* <span className={classes.TipHeading}>Tip your delivery executive</span>
                            <span className={classes.TipText}>Thank your delivery executive in these tough times by paying a small amount to help</span>
                            <div className={classes.TipButtons}>
                                <button className={classes.TipButton}>1</button>
                                <button className={classes.TipButton}>2</button>
                                <button className={classes.TipButton}>3</button>
                                <button className={classes.TipButton}>4</button>
                                <input className={classes.TipInput} placeholder="Custom" />
                            </div> */}
                            <div className={classes.OrderTotal}>
                                <div className={classes.ItemTotal}>
                                    <span className={classes.ItemTotalText}>Item Total</span>
                                    <span className={classes.ItemTotalTotal}>£{this.props.user.itemsCost}</span>
                                </div>
                                <div className={classes.ItemOther}>
                                    <span className={classes.ItemOtherText}>Delivery Charges</span>
                                    <span className={classes.ItemOtherTotal}>{this.props.user.deliveryCost===0 ? 'FREE' : `£${this.props.user.deliveryCost}`}</span>
                                </div>
                    {/* <Directions /> */}

                                {/* <div className={classes.ItemOther}>
                                    <span className={classes.ItemOtherText}>Packing Charges</span>
                                    <span className={classes.ItemOtherTotal}>£12</span>
                                </div> */}
                            </div>

                            <div className={classes.FinalTotal}>
                                <span className={classes.FinalTotalHeading}>Total Payable</span>
                                <span className={classes.FinalTotalTotal} onClick={this.showAddress}>£ {(Number(this.props.user.itemsCost)+Number(this.props.user.deliveryCost))}</span>
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
        }),
        setDeliveryCost : (cost) => dispatch({
            type : 'SET_DELIVERY_COST',
            payload : cost
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)