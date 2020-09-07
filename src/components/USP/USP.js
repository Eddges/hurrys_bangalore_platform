import React from 'react'
import classes from './USP.module.css'
import mapIcon from '../../assets/map.svg'
import shieldIcon from '../../assets/shield.svg'
import bag from '../../assets/bag.svg'

const USP = () => (
    <div className={classes.USP}>
        <span className={classes.USPHeading}>Why Choose Us</span>
        <div className={classes.USPDiv}>

            <div className={classes.USPItem}>
                <img src={mapIcon} alt="USP 1" />
                <div className={classes.USPItemText}>
                    <span>USP 1</span>
                    <span>This is USP description 1</span>
                    <span>usp description 2</span>
                </div>
            </div>

            <div className={classes.USPItem}>
                <img src={bag} alt="USP 2" />
                <div className={classes.USPItemText}>
                    <span>USP 2</span>
                    <span>This is USP description 1</span>
                    <span>usp description 2</span>
                </div>
            </div>

            <div className={classes.USPItem}>
                <img src={shieldIcon} alt="USP 3" />
                <div className={classes.USPItemText}>
                    <span>USP 3</span>
                    <span>This is USP description 1</span>
                    <span>usp description 2</span>
                </div>
            </div>
            
        </div>
    </div>
)

export default USP