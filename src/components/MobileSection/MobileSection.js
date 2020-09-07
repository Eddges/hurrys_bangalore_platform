import React from 'react'
import classes from './MobileSection.module.css'
import MobileCards from '../../assets/MobileCards.png'
import MobileCircle from '../../assets/MobileCircle.svg'
import PlayStore from '../../assets/PlayStoreIcon.png'
import AppleStore from '../../assets/AppleStoreIcon.png'

const MobileSection = () => (
    <div className={classes.MobileSection}>
        <div className={classes.Left}>
            <div className={classes.Circle1}></div>
            <div className={classes.Circle2}></div>
            <img className={classes.Circle3} src={MobileCircle} />
            <span className={classes.Title}>Get things done</span>
            <span className={classes.SubText}>right from your phone</span>
            <div className={classes.Icons}>
                <img src={PlayStore} alt="Play Store" />
                <img src={AppleStore} alt="Apple Store" />
            </div>
        </div>
        <div className={classes.Right}>
            <img src={MobileCards} alt="Mobile Cards" />
        </div>
    </div>
)

export default MobileSection