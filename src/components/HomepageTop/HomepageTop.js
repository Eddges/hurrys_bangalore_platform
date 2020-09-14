import React from 'react'
import classes from './HomepageTop.module.css'
import HomepageBG from '../../assets/HomepageMain.png'
import Pin from '../../assets/pin.svg'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

class HomepageTop extends React.Component{

    state = {
        latitude : null,
        longitude : null,
        userAddress : null,
        generalAddress : null,
        address : ''
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
            this.setState({
                ...this.state,
                userAddress : data.results[0].formatted_address,
                generalAddress : data.results[4].formatted_address
            })
            setTimeout(() => {
                this.props.onChangeLocation(this.state)
            }, 0)
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

    // handleSearchClick = () => {
    //     this.setState({
    //         ...this.state,
    //         generalAddress : ''
    //     })
    // }

    handleLocationChange = (e) => {
        this.setState({
            ...this.state,
            generalAddress : e.target.value
        })
        // setTimeout(() => {
        //     fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.generalAddress}&key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA`)
        //     .then(res => {
        //         console.log('response data : ', res.data)
        //     })
        // }, 0)
    }

    handleChange = address => {
        console.log('ChangedAddress : ', address)
        this.setState({
            ...this.state,
            generalAddress : address
        });
      };
     
      handleSelect = address => {
          console.log('Selected address : ', address)
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .then(() => {
              this.setState({
                ...this.state,
                generalAddress : address
              })
          })
          .catch(error => console.error('Error', error));
      };

      handleProceed = () => {
          this.props.onChangeLocation(this.state)
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
                    <NavLink className={classes.ProceedButton} to="/shops" onClick={() => this.handleProceed()}>Proceed</NavLink>
                </div>
                {/* <div className={classes.Frequent}>
                    <span>Frequent Locations: </span>
                    <span>Bangalore, Pune, Hyderabad, Chennai</span>   
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        location : state.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLocation : (location) => dispatch({
            type : 'CHANGE_LOCATION',
            location : location
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageTop)