import React from 'react'
import classes from './Navbar.module.css'
import LogoBlack from '../../assets/LogoBlack.png'
import {NavLink} from 'react-router-dom'
import Portal from '../../components/Portal/Portal';
import PortalSignup from '../Portal/PortalSignup';
import {connect} from 'react-redux'
import { auth } from '../../firebase'

const Navbar = (props) => {

    const signOutHandler = () => {
        auth.signOut()
        localStorage.removeItem('LoggedIn')
        localStorage.removeItem('Name')
        localStorage.removeItem('MobileNumber')
        localStorage.removeItem('Email')
        props.removeUser()
    }

    return(
        <div className={classes.Navbar}>
            <NavLink className={classes.Logo} to="/">
                <img src={LogoBlack} alt="Logo" />
            </NavLink>
            
            {
                localStorage.getItem('LoggedIn') ? 
                    <div className={classes.NavButtons}>
                        <button className={classes.SignUpButton} onClick={signOutHandler}>Sign Out</button>
                    </div>
                : 
                    <div className={classes.NavButtons}>
                        <button className={classes.LoginButton}> <Portal/> </button>
                        <button className={classes.SignUpButton}> <PortalSignup/> </button>
                    </div>
            }

        </div>
    )
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