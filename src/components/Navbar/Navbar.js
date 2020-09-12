import React from 'react'
import classes from './Navbar.module.css'
import LogoBlack from '../../assets/LogoBlack.png'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <NavLink className={classes.Logo} to="/">
                <img src={LogoBlack} alt="Logo" />
            </NavLink>
            
            <div className={classes.NavButtons}>
                <button className={classes.LoginButton}>Login</button>
                <button className={classes.SignUpButton}>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar