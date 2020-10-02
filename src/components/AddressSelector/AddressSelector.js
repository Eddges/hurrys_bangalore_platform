import React from 'react'
import classes from './AddressSelector.module.css'
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import {connect} from 'react-redux'




class AddressSelector extends React.Component{

    state = {
        latitude : this.props.red.location.latitude,
        longitude : this.props.red.location.longitude,
        address : '',
        markerPosition : null
    }

    handleAddress = () => {
        this.props.modalAddress(this.state.latitude, this.state.longitude, this.state.address)
        this.props.modalClose()
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            address : e.target.value
        })
    }

    render(){
        console.log('Lat : ', this.props.red.location.latitude, ' Long : ', this.props.red.location.longitude)
        const Map = compose(
            withStateHandlers(() => ({
                isMarkerShown: true,
                markerPosition: this.state.markerPosition
              }), {
                onMapClick: ({ isMarkerShown }) => (e) => {
                    console.log('Marker event : ', e.latLng.lat())
                    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.latLng.lat()},${e.latLng.lng()}&key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA`)
                    .then(response => response.json())
                    .then(data => {
                        console.log('Current Location : ', data.results)
                        this.setState({
                            ...this.state,
                            latitude : e.latLng.lat(),
                            longitude : e.latLng.lng(),
                            address : data.results[0].formatted_address,
                            markerPosition : e.latLng
                        })
                    })
                        
                    .catch(error => alert(error))
                    return ({
                    markerPosition: e.latLng,
                    isMarkerShown:true
                })}
              }),
            withScriptjs,
            withGoogleMap
        )
            (props =>
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat: Number(this.props.red.location.latitude), lng: Number(this.props.red.location.longitude) }}
                    onClick={props.onMapClick}
                >
                    {props.isMarkerShown && <Marker position={props.markerPosition} />}
        
                </GoogleMap>
            )
        return(
            <div className={classes.Container}>
                <div className={classes.Backdrop}></div>
                <div className={classes.Main}>
                    <ion-icon name="close-outline" onClick={this.props.modalClose}></ion-icon>
                    <span className={classes.Heading}>Add New Address</span>
                    <input className={classes.InputAddress} value={this.state.address} onChange={this.handleInputChange} placeholder="Click on the map to set location" />
                    <div className={classes.MapDisplay}>
                        <Map
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                    <button type="button" className={classes.ButtonAdd} onClick={this.handleAddress}>ADD</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        red : state.red,
        user : state.usr
    }
}

const mapDispatchToProps = dispatch => {
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressSelector)