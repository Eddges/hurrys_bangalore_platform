import React from 'react'
import classes from './AddressSelector.module.css'
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import {connect} from 'react-redux'
import Pin from '../../assets/pin.svg'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


class AddressSelector extends React.Component{

    state = {
        latitude : this.props.red.location.latitude,
        longitude : this.props.red.location.longitude,
        address : '',
        markerPosition : null
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationErrors);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates = (position) => {
        this.setState({
            ...this.state,
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
        })
        this.reverseGeoEncode()
    }

    reverseGeoEncode = () => {
        console.log('State : ', this.state)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA`)
        .then(response => response.json())
        .then(data => {
            console.log('Current Location : ', data.results)
            this.setState({
                ...this.state,
                address : data.results[0].formatted_address,
            })
        })
            
        .catch(error => alert(error))
    }

    handleLocationErrors = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.")
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.")
              break;
          }
    }

    handleAddress = () => {
        this.props.modalAddress(this.state.latitude, this.state.longitude, this.state.address)
        this.props.modalClose()
    }

    handleInputChange = (address) => {
        this.setState({
            ...this.state,
            address : address
        });
    }

    handleSelect = address => {
        console.log('Selected address : ', address)
        geocodeByAddress(address)
        .then(results => {
            return getLatLng(results[0])})
        .then(latLng => {
            console.log(latLng)
            this.setState({
                ...this.state,
                address : address,
                latitude : latLng.lat,
                longitude : latLng.lng,
                markerPosition : latLng,
                isMarkerShown : true
            }, () => {
                console.log('Changed state : ', this.state)
            })
        })
        .catch(error => console.error('Error', error));
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
                    defaultZoom={12}
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
                    <div className={classes.AddressBar}>
                        <div className={classes.Locate} onClick={this.getLocation}>
                            <img src={Pin} alt="Pin" />
                        </div>
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div className={classes.InputAddress}>
                                <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                                />
                                {/* className="autocomplete-dropdown-container" */}
                                <div className={classes.AutocompleteContainer}>
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                    ? `${classes.SuggestionItemActive}`
                                    : `${classes.SuggestionItem}`;
                                    // inline style for demonstration purpose

                                    return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                        className,
                                        
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            )}
                        </PlacesAutocomplete>
                        {/* <input className={classes.InputAddress} value={this.state.address} onChange={this.handleInputChange} placeholder="Click on the map to set location" /> */}
                    </div>
                    <div className={classes.Absolute}></div>
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