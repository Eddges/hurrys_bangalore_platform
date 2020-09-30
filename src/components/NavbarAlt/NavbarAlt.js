import React from 'react'
import classes from './NavbarAlt.module.css'
import Logo from '../../assets/LogoBlack.png'
import LocationIcon from '../../assets/location.svg'
import DownIcon from '../../assets/chevron.svg'
import UserIcon from '../../assets/user.svg'
import CartIcon from '../../assets/cart.svg'
import Cart from '../Cart/Cart'
import CartGreenIcon from '../../assets/cart_green.svg'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ProfileGreen from '../../assets/profileGreen.svg'
import ProfileDrawer from '../ProfileDrawer/ProfileDrawer'
import {database} from '../../firebase'

class NavbarAlt extends React.Component{
    state={
        showCart : false,
        showProfile : false,
        count : 0
    }

    handleCart = () => {
        this.setState({
            ...this.state,
            showCart : !this.state.showCart
        })
    }
    handleProfile = () => {
        this.setState({
            ...this.state,
            showProfile : !this.state.showProfile
        })
    }

    // componentDidMount() {
    //     var count = 0
    //     database.ref('/Users').child(this.props.user.UserId).child('Cart').on('value', snapshot => {
    //         Object.keys(snapshot.val()).map((iterator, index) => {
    //             Object.keys(snapshot.val()[iterator]).map(i => {
    //                 count = count +1
    //             })
    //         })
    //         this.setState({
    //             ...this.state,
    //             count : count
    //         })
    //     })
        
        

    // }

    render() {
        return(
            <React.Fragment>
                <div className={classes.Container}>
                    <div className={classes.Left}>
                        <NavLink className={classes.Logo} to="/">
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                        <div className={classes.Location}>
                            <img src={LocationIcon} alt="Location Icon" />
                            <span className={classes.Text}>{this.props.location.generalAddress ? this.props.location.generalAddress : 'Get Location'}</span>
                            <img className={classes.Chevron} src={DownIcon} alt="Dropdown" />
                        </div>
                        <input className={classes.Search} placeholder="Search for restaurants, shops, brands, items etc." />
                    </div>

                    <div className={classes.Right}>
                        {
                            this.state.showProfile ? 
                            <img className={classes.User} src={ProfileGreen} onClick={this.handleProfile} alt="User" /> : 
                            <img className={classes.User} src={UserIcon} alt="User" onClick={this.handleProfile} />
                        }
                        
                        {
                            this.state.showCart ? 
                            <div className={classes.Cart}>
                                <img className={classes.Cart} src={CartGreenIcon} alt="Cart" onClick={this.handleCart} />
                            </div>
                                :
                            <div className={classes.Cart}>
                                <img className={classes.Cart} src={CartIcon} alt="Cart" onClick={this.handleCart} />
                                {/* <span className={classes.Count}>{this.state.count}</span> */}
                            </div>
                        }

                    </div>
                </div>
                <div className={classes.Space}></div>
                {
                    this.state.showCart ? <Cart handleCartBack={this.handleCart} /> : null
                }
                {
                    this.state.showProfile ? <ProfileDrawer handleProfile={this.handleProfile} /> : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        location : state.red.location,
        user : state.usr,
        red : state.red
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarAlt)