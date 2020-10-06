import React from 'react'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './ContactUs.module.css'
import GreenBG from '../../assets/GreenBottom.svg'
import Footer from '../Footer/Footer'
import GoogleMapReact from 'google-map-react'
import Logo from '../../assets/LogoBlack.png'

const AnyReactComponent = ({ text }) => <div className={classes.Marker}>{text}</div>;

const ContactUs = (props) => {
    console.log('About : ', props.about==='true')
    return(
        <div className={classes.Container}>
            <NavbarAlt />
            <img className={classes.Background} src={GreenBG} alt="Background" />
            {
                props.about==='true' ? 
                <div className={classes.Main}>
                <div className={classes.Contact}>
                    <span className={classes.HeadingContact}>{props.about==='true' ? 'About' : 'Contact'} Us</span>
                    <div className={classes.InfoPanel} style={{'padding' : `${props.about ? '100px 50px' : 'default'}`}}>
                        <div className={classes.Left}>
                        {
                            props.about==='true' ? 
                            null :
                            <span className={classes.Heading}>Address : </span>
                        }
                            <span className={props.about==='true' ? `${classes.Info} ${classes.aboutInfo}` : `${classes.Info}`}>Our idea is to bring new ways of shopping and make people&#39;s lives a bit easier.</span>
                            <span className={props.about==='true' ? `${classes.Info} ${classes.aboutInfo}` : `${classes.Info}`}>Hurrys lets you order your favourite groceries, food and household products from
                                trusted local retailers, who otherwise may not offer instant delivery. We want to
                                connect people with local retailers in the shortest period of time. Our customers are
                                as passionate about great food and products as we are! Hurrys was created as a
                                business where customers come first. Our team aims to bring our customer service
                                on a completely new level with no difference in costs. Our business is operated by a
                                group of enthusiastic and highly educated individuals who have seen a gap in the
                                market.
                            </span>
                            {/* <span className={classes.Heading}>Phone :</span>
                            <span className={classes.Info}>+81 934200234</span>
                            <span className={classes.Heading}>Email :</span>
                            <span className={classes.Info}>hello@mail.com</span>
                            <span className={classes.Support}>Looking for support? <span>Click Here</span></span> */}
                        </div>
                        <div className={classes.Right}>
                        {
                            props.about==='true' ? 
                                <img className={classes.Logo} src={Logo} alt="Logo" />
                                : 
                                
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
                        }

                        </div>
                    </div>
                </div>
            </div> : 
            <div className={classes.Main}>
                <div className={classes.Contact}>
                    <span className={classes.HeadingContact}>{props.about==='true' ? 'About' : 'Contact'} Us</span>
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
                        {
                            props.about==='true' ? 
                                <img className={classes.Logo} src={Logo} alt="Logo" />
                                : 
                                
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
                        }

                        </div>
                    </div>
                </div>
            </div>
            }
            
            <Footer />
        </div>
    )
}

export default ContactUs