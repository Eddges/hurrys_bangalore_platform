import React from 'react'
import WalletCard from '../WalletCard/WalletCard'
import classes from './MyWallet.module.css'
import Pound from '../../assets/pound.svg'
import fruit from '../../assets/fruits-vegetables.svg'
import PlayStore from '../../assets/PlayStoreIcon.png'
import AppleStore from '../../assets/AppleStoreIcon.png'
import {withRouter} from 'react-router-dom'

const MyWallet  = (props) => {
    return(
        <div className={classes.Container}>
            <span className={classes.WalletHeading}>WALLET TRANSACTIONS</span>
            <div className={classes.Main}>
                <div className={classes.MainLeft}>
                    <p className={classes.MainLeftHeading}>Recents</p>
                    <div className={classes.HRLine}></div>
                    <div className={classes.WalletCards}>
                        <WalletCard type="cashback" icon={Pound} title="Cashback Received from Hurrys" time="Fri, 23 Jun 2020, 10:41 AM" amount="20" />
                        <WalletCard type="transaction" icon={fruit} title="Paid for order to Bangalore Bazaar" time="Fri, 23 Jun 2020, 10:41 AM" amount="340" />
                        <WalletCard type="transaction" icon={fruit} title="Paid for order to Bangalore Bazaar" time="Fri, 23 Jun 2020, 10:41 AM" amount="340" />
                        <WalletCard type="transaction" icon={fruit} title="Paid for order to Bangalore Bazaar" time="Fri, 23 Jun 2020, 10:41 AM" amount="340" />
                    </div>
                </div>
                <div className={classes.MainRight}>
                    <div className={classes.AvailableBalance}>
                        <span className={classes.Heading}>Available Balance</span>
                        <span className={classes.Balance}>￡130</span>
                    </div>
                    <div className={classes.Phone}>
                        <span className={classes.Heading}>Download the app for a smoother experience</span>
                        <span className={classes.SubHeading}>Get things done right from your phone</span>
                        <img src={PlayStore} onClick={() => { window.open('https://play.google.com/store/apps/details?id=hurrys.corp.ltd', '_blank')}} alt="Play Store Icon" />
                        <img src={AppleStore} onClick={() => { window.open('https://play.google.com/store/apps/details?id=hurrys.corp.ltd', '_blank')}} alt="Apple Store Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MyWallet)