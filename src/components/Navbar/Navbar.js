import React from 'react'
import classes from './Navbar.module.css'
import LogoBlack from '../../assets/LogoBlack.png'

const Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <img className={classes.Logo} src={LogoBlack} alt="Logo" />
            <div className={classes.NavButtons}>
                <button className={classes.LoginButton}>Login</button>
                <button className={classes.SignUpButton}>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar