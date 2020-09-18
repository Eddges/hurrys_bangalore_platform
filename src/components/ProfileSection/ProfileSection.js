import React from 'react'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './ProfileSection.module.css'
import Location from '../../assets/locationMarker.svg'
import Wallet from '../../assets/wallet.svg'
import Support from '../../assets/support.svg'
import Offers from '../../assets/offers.svg'
import Gift from '../../assets/gift.svg'
import Share from '../../assets/share.svg'
import Info from '../../assets/info.svg'
import Logout from '../../assets/logout.svg'
import CartIcon from '../../assets/cart.svg'
import {connect} from 'react-redux'
import ProfileOrders from '../ProfileOrders/ProfileOrders'
import {NavLink, Route} from 'react-router-dom'
import ProfileDash from '../ProfileDash/ProfileDash'

class ProfileSection extends React.Component{

    state = {
        activeComponent : 'orders'
    }

    render(){

        let active = <ProfileOrders />

        switch(this.props.active) {
            case 'orders' : 
                console.log(this.props.active)
                active = <ProfileOrders />

        }


        return(
            <div className={classes.Container}>
                <NavbarAlt />
                <div className={classes.Main}>
                    <div className={classes.ContainerLeft}>
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
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </div>

                        <NavLink to="/profile-orders" className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={CartIcon} alt="Location" style={{filter : 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'}} />
                                <span>My Orders</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </NavLink>

                        <div className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Wallet} alt="Location" />
                                <span>My Wallet</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </div>

                        <div className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Support} alt="Location" />
                                <span>Customer Support</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </div>

                        <div className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Offers} alt="Location" />
                                <span>Offer Zone</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </div>

                        <div className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Gift} alt="Location" />
                                <span>Refer Your Friends</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
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
                    </div>
                    <div className={classes.ProfileRight}>
                        {active}
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

export default connect(mapStateToProps)(ProfileSection)