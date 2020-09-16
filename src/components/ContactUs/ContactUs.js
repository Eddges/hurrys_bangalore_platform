import React from 'react'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './ContactUs.module.css'
import GreenBG from '../../assets/GreenBottom.svg'
import Footer from '../Footer/Footer'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div className={classes.Marker}>{text}</div>;

const ContactUs = (props) => {
    return(
        <div className={classes.Container}>
            <NavbarAlt />
            <img className={classes.Background} src={GreenBG} alt="Background" />
            <div className={classes.Main}>
                <div className={classes.Contact}>
                    <span className={classes.HeadingContact}>Contact Us</span>
                    <div className={classes.InfoPanel}>
                        <div className={classes.Left}>
                            <span className={classes.Heading}>Address :</span>
                            <span className={classes.Info}>Address line one</span>
                            <span className={classes.Info}>Address line two, pincode - 28931</span>
                            <span className={classes.Heading}>Phone :</span>
                            <span className={classes.Info}>+81 934200234</span>
                            <span className={classes.Heading}>Email :</span>
                            <span className={classes.Info}>hello@mail.com</span>
                            <span className={classes.Support}>Looking for support? <span>Click Here</span></span>
                        </div>
                        <div className={classes.Right}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA`' }}
                            defaultCenter={{lat : 59.95, lng : 30.33}}
                            defaultZoom={11}
                        >
                            <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="Hurrys"
                            />
                        </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs