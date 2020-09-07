import React from 'react'
import Navbar from '../Navbar/Navbar'
import WebTop from '../WebTop/WebTop'
import USP from '../USP/USP'
import MobileSection from '../MobileSection/MobileSection'
import DeliveryBG from '../../assets/DeliveryMain.png'
import Footer from '../../components/Footer/Footer'
import Testimonial from '../../components/TestimonialSection/Testimonial'

class Delivery extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <WebTop BG={DeliveryBG} highlight="Change Lives and Start Earning" subText="Help us reach millions hearts by becoming delivery partner for Hurry's" buttonText="BECOME A PARTNER" />
                <USP />
                <MobileSection />
                <Testimonial/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Delivery