import React from 'react'
import classes from './HomepageTop.module.css'
import HomepageBG from '../../assets/HomepageMain.png'
import Pin from '../../assets/pin.svg'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {database} from '../../firebase'
import {withRouter} from 'react-router-dom'

class HomepageTop extends React.Component{

    state = {
        latitude : null,
        longitude : null,
        userAddress : null,
        generalAddress : null,
        address : '',
        city : '',
        deliverable : false
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
                userAddress : data.results[0].formatted_address,
                generalAddress : data.results[4].formatted_address
            }, () => {
                this.props.onChangeLocation(this.state)
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

    handleLocationChange = (e) => {
        this.setState({
            ...this.state,
            generalAddress : e.target.value
        })
    }

    handleChange = address => {
        this.setState({
            ...this.state,
            generalAddress : address
        });
      };
     
    handleSelect = address => {
        console.log('Selected address : ', address)
    geocodeByAddress(address)
        .then(results => {
            return getLatLng(results[0])})
        .then(latLng => {
            console.log(latLng)
            this.setState({
                ...this.state,
                generalAddress : address,
                latitude : latLng.lat,
                longitude : latLng.lng
            }, () => {
                console.log('Changed state : ', this.state)
            })
        })
        .catch(error => console.error('Error', error));
    };

    handleProceed = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA`)
        .then(response => response.json())
        .then(data => {
            console.log('Current Location : ', data.results)
            const locationType = ["locality", 'political']
            let selectedCity = ''
            data.results.map((location, index) => {
                if(location.types[0]==="locality" && location.types[1]==='political'){
                    console.log('Found : ', location)
                    selectedCity =  location.address_components[0].short_name
                    return
                }
            })
            console.log('Selected city : ', selectedCity)
            if(selectedCity){
                database.ref('/Masters').child('City').once('value', snapshot => {
                    Object.keys(snapshot.val()).map((iterator, index) => {
                        if(snapshot.val()[iterator].Name===selectedCity) {
                            this.setState({
                                ...this.state,
                                deliverable : true,
                                city : snapshot.val()[iterator]
                            })
                            console.log('Found in database : ', snapshot.val()[iterator])
                        }
                    })
                    if(!this.state.deliverable) {
                        alert('We do not currently deliver to this location')
                    }
                    else{
                        this.props.setCity(this.state.city)
                        localStorage.setItem('activeCity', JSON.stringify(this.state.city))
                        this.props.onChangeLocation(this.state)
                        localStorage.setItem('latitude', this.state.latitude)
                        localStorage.setItem('longitude', this.state.longitude)
                        localStorage.setItem('generalAddress', this.state.generalAddress)
                        this.props.history.push('/shops')
                    }
                })
            }
            else{
                alert('We do not deliver to this location currently.')
            }
        })
            
        .catch(error => alert(error))


    }

    findDistance = (lat1,lon1,lat2,lon2) => {
     
            lat1 = this.state.latitude
            lon1 = this.state.longitude
            lat2 = 12.975352963296594
            lon2 = 77.61883911132811
            var R = 6371; // Radius of the earth in km
            var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
            var dLon = this.deg2rad(lon2-lon1); 
            var a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2)
              ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            // return d;
            console.log('Distance : ', d)
    }

    deg2rad = (deg) => {
        return deg * (Math.PI/180)
      }

    render(){
        return(
            <div className={classes.HomepageTop}>
                <img className={classes.BG} src={HomepageBG} alt="Background" />
                <span className={classes.MainText}>Get <span className={classes.Highlite}>home food</span> delivered at your doorstep.</span>
                <div className={classes.Rectangle}>
                    {/* <input type="text" placeholder="Enter delivery location" value={this.state.generalAddress} onChange={(e) => this.handleLocationChange(e)} /> */}

                    <PlacesAutocomplete
                        value={this.state.generalAddress}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className={classes.SearchDiv}>
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

                    <div className={classes.Locate} onClick={this.getLocation}>
                        <img src={Pin} alt="Pin" />
                        <span>Locate Me</span>
                    </div>
                    <button className={classes.ProceedButton} onClick={() => this.handleProceed()}>Proceed</button>
                    {/* <NavLink className={classes.ProceedButton} to="/shops" onClick={() => this.handleProceed()}>Proceed</NavLink> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        location : state.usr.currentLocation
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLocation : (location) => dispatch({
            type : 'CHANGE_LOCATION',
            location : location
        }),
        setCity : city => dispatch({
            type : 'SET_CITY',
            payload : city
        })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomepageTop))