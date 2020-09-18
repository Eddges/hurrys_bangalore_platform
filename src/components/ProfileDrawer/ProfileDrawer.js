import React from 'react'
import classes from './ProfileDrawer.module.css'
import haldirams from '../../assets/haldirams.jpeg'
import {connect} from 'react-redux'
import Location from '../../assets/locationMarker.svg'
import Wallet from '../../assets/wallet.svg'
import Support from '../../assets/support.svg'
import Offers from '../../assets/offers.svg'
import Gift from '../../assets/gift.svg'
import Share from '../../assets/share.svg'
import Info from '../../assets/info.svg'
import Logout from '../../assets/logout.svg'
import CartIcon from '../../assets/cart.svg'

class ProfileDrawer extends React.Component{
    state = {
        show : true,
    }

    handleCartBack = () => {
        this.setState({
            ...this.state,
            show : false
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <div className={classes.Backdrop}></div>
                <div className={classes.Main}>
                    <div className={classes.ProfileInfo}>
                        <div className={classes.Left}>
                            <span className={classes.Name}>{this.props.user.name}</span>
                            <span className={classes.Info}>{this.props.user.phone}</span>
                            <span className={classes.Info}>{this.props.user.email}</span>
                        </div>
                        <button type="button" className={classes.EditButton}>EDIT</button>
                    </div>
                    <span className={classes.HRLine}></span>


                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Location} alt="Location" />
                            <span>Manage Address</span>
                        </div>
                        <div className={classes.Right}>
                            <ion-icon name="chevron-forward"></ion-icon>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={CartIcon} alt="Location" />
                            <span>My Orders</span>
                        </div>
                        <div className={classes.Right}>
                            <ion-icon name="chevron-forward"></ion-icon>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Wallet} alt="Location" />
                            <span>My Wallet</span>
                        </div>
                        <div className={classes.Right}>
                            <ion-icon name="chevron-forward"></ion-icon>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Support} alt="Location" />
                            <span>Customer Support</span>
                        </div>
                        <div className={classes.Right}>
                            <ion-icon name="chevron-forward"></ion-icon>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Offers} alt="Location" />
                            <span>Offer Zone</span>
                        </div>
                        <div className={classes.Right}>
                            <ion-icon name="chevron-forward"></ion-icon>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Gift} alt="Location" />
                            <span>Refer Your Friends</span>
                        </div>
                        <div className={classes.Right}>
                            <ion-icon name="chevron-forward"></ion-icon>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Share} alt="Location" />
                            <span>Share</span>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Info} alt="Location" />
                            <span>About Us</span>
                        </div>
                    </div>

                    <div className={classes.ProfileItem}>
                        <div className={classes.Left}>
                            <img src={Logout} alt="Location" />
                            <span>Logout</span>
                        </div>
                    </div>
                    <div className={classes.ButtonDiv}>
                        <button className={classes.ExitButton} onClick={this.props.handleProfile}>Back</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(ProfileDrawer)