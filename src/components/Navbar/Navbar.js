import React from 'react'
import classes from './Navbar.module.css'
// <<<<<<< HEAD
import LogoBlack from '../../assets/LogoBlack.png'
import {NavLink} from 'react-router-dom'
// =======
// import LogoBlack from '../../assets/LogoBlack.png';
// import Portal from '../../components/Portal/Portal';
// >>>>>>> bbefccee4b9b8e4eff56b2465134c1dc5ab1cefb

const Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <NavLink className={classes.Logo} to="/">
                <img src={LogoBlack} alt="Logo" />
            </NavLink>
            
            <div className={classes.NavButtons}>
                <button className={classes.LoginButton}> <Portal/> </button>
                <button className={classes.SignUpButton}>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar