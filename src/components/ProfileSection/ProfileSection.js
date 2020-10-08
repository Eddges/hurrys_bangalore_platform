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
import MyWallet from '../MyWallet/MyWallet';
import ProfileEditPortal from '../Portal/ProfileEdit/ProfileEditPortal';
import CustomerSupport from '../CustomerSupport/CustomerSupport';
import CustomerFAQ from '../CustomerSupport/CustomerFAQ/CustomerFAQ'
import FaqQues from '../CustomerSupport/FaqQues/FaqQues'
import ReferralPage from '../Referral/ReferralPage'
import CouponPortal from '../Portal/CouponCode/CouponPortal'
import CouponContent from '../Portal/CouponCode/CouponContent'
import ProfileManageAddress from '../ProfileManageAddress/ProfileManageAddress'


class ProfileSection extends React.Component{

    state = {
        activeComponent : 'orders'
    }
    changeDisplay = (active) => {
        console.log('Active : ', active)
        this.setState({
            ...this.state,
            activeComponent : active
        })
    }

    render(){

        let active = <ProfileOrders />
        console.log('Active prop : ', this.props.active)
        switch(this.props.active) {
            case 'orders' : 
                console.log('Changing active to : ', this.props.active)
                active = <ProfileOrders />
                break
            case 'wallet' : 
                console.log('Changing active to : ', this.props.active)
                active = <MyWallet />
                break
            case 'customer' :
                console.log('Changing active to : ', this.props.active)
                active = <CustomerSupport/>
                break
            case 'faq' :
                console.log('Changing active to : ', this.props.active)
                active = <CustomerFAQ/>
                break
            case 'fques' :
                console.log('Changing active to : ', this.props.active)
                active = <FaqQues/>
                break
            case 'refer' : 
                console.log('Refer is active')
                active = <ReferralPage/>
                break
            case 'coupon' : 
                console.log('Refer is active')
                active = <CouponContent/>
                break
            case 'address' : 
                console.log('Manage address active')
                active = <ProfileManageAddress />
                break
        }


        return(
            <div className={classes.Container}>
                <NavbarAlt />
                <div className={classes.Main}>
                    <div className={classes.ContainerLeft}>
                        <div className={classes.ProfileInfo}>
                            <div className={classes.Left}>
                                <span className={classes.Name}>{this.props.user.Name}</span>
                                <span className={classes.Info}>{this.props.user.MobileNumber}</span>
                                <span className={classes.Info}>{this.props.user.Email}</span>
                            </div>
                            <button type="button" className={classes.EditButton}> <ProfileEditPortal/> </button>
                        </div>
                        <span className={classes.HRLine}></span>


                        <NavLink to="/address" className={classes.ProfileItem} onClick={() => this.changeDisplay('address')}>
                            <div className={classes.Left}>
                                <img src={Location} alt="Location" />
                                <span>Manage Address</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </NavLink>

                        <NavLink to="/profile-orders" className={classes.ProfileItem} onClick={() => this.changeDisplay('orders')}>
                            <div className={classes.Left}>
                                <img src={CartIcon} alt="Location" style={{filter : 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'}} />
                                <span>My Orders</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </NavLink>

                        <NavLink to="/wallet" className={classes.ProfileItem} onClick={() => this.changeDisplay('wallet')}>
                            <div className={classes.Left}>
                                <img src={Wallet} alt="Location" />
                                <span>My Wallet</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </NavLink>
                        <NavLink to="/Customer-support" className = {classes.ProfileItem} onClick = {() => this.changeDisplay('Customer')}>
                        
                            <div className={classes.Left}>
                                <img src={Support} alt="Location" />
                                <span>Customer Support</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                       
                        </NavLink>

                        <NavLink to="/coupon" className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Offers} alt="Location" />
                                <span> Offer Zone</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </NavLink>

                        <NavLink to="/refer" className={classes.ProfileItem} onClick = {() => this.changeDisplay('refer')}>
                            <div className={classes.Left}>
                                <img src={Gift} alt="Location" />
                                <span>Refer Your Friends</span>
                            </div>
                            <div className={classes.ProfileItemRight}>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </div>
                        </NavLink>

                        <div className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Share} alt="Location" />
                                <span>Share</span>
                            </div>
                        </div>

                        <NavLink to="/about" className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Info} alt="Location" />
                                <span>About Us</span>
                            </div>
                        </NavLink>

                        <NavLink to="/" className={classes.ProfileItem}>
                            <div className={classes.Left}>
                                <img src={Logout} alt="Location" />
                                <span>Logout</span>
                            </div>
                        </NavLink>
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
        user : state.usr
    }
}

export default connect(mapStateToProps)(ProfileSection)