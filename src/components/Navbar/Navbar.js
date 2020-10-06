import React from 'react'
import classes from './Navbar.module.css'
import LogoBlack from '../../assets/LogoBlack.png'
import {NavLink} from 'react-router-dom'
import Portal from '../../components/Portal/Portal';
import PortalSignup from '../Portal/PortalSignup';
import {connect} from 'react-redux'
import { auth } from '../../firebase'
import ProfileGreen from '../../assets/profileGreen.svg'
import ProfileDrawer from '../ProfileDrawer/ProfileDrawer'
import UserIcon from '../../assets/user.svg'

class Navbar extends React.Component {
    state = {
        showProfile : false
    }

    handleProfile = () => {
        this.setState({
            ...this.state,
            showProfile : !this.state.showProfile
        })
    }

    render(){
        const signOutHandler = () => {
            auth.signOut()
            localStorage.removeItem('LoggedIn')
            localStorage.removeItem('Name')
            localStorage.removeItem('MobileNumber')
            localStorage.removeItem('Email')
            this.props.removeUser()
        }
    
        return(
            <div className={classes.Navbar}>
                <NavLink className={classes.Logo} to="/">
                    <img src={LogoBlack} alt="Logo" />
                </NavLink>
                
                {
                    localStorage.getItem('LoggedIn') ? 
                        <div className={classes.NavButtons}>
                            {/* <img className={classes.User} src={UserIcon}  alt="User" /> */}
                            <span className={classes.User} onClick={this.handleProfile}>My Profile</span>
                            <button className={classes.SignUpButton} onClick={signOutHandler}>Sign Out</button>
                        </div>
                    : 
                        <div className={classes.NavButtons}>
                            <button className={classes.LoginButton}> <Portal/> </button>
                            <button className={classes.SignUpButton}> <PortalSignup/> </button>
                        </div>
                }

                {this.state.showProfile && <ProfileDrawer handleProfile={this.handleProfile} />}
    
            </div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return{
        user : state.usr
    }
}

const mapDispatchToProps = dispatch => {
    return{
        removeUser : () => dispatch({
            type : 'REMOVE_USER',
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)