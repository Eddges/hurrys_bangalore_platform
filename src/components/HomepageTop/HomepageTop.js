import React from 'react'
import classes from './HomepageTop.module.css'
import HomepageBG from '../../assets/HomepageMain.png'
import Pin from '../../assets/pin.svg'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

class HomepageTop extends React.Component{

    state = {
        latitude : null,
        longitude : null,
        userAddress : null,
        generalAddress : null
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
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA')
        .then(response => response.json())
        .then(data => {
            this.setState({
                ...this.state,
                userAddress : data.results[0].formatted_address,
                generalAddress : data.results[5].formatted_address
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

    render(){
        return(
            <div className={classes.HomepageTop}>
                <img className={classes.BG} src={HomepageBG} alt="Background" />
                <span className={classes.MainText}>Get <span className={classes.Highlite}>home food</span> delivered at your doorstep.</span>
                <div className={classes.Rectangle}>
                    <input type="text" placeholder="Enter delivery location" value={this.props.location.generalAddress} />
                    <div className={classes.Locate} onClick={this.getLocation}>
                        <img src={Pin} alt="Pin" />
                        <span>Locate Me</span>
                    </div>
                    <NavLink className={classes.ProceedButton} to="/shops">Proceed</NavLink>
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