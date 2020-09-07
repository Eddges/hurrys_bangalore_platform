import React from 'react'
import Navbar from '../Navbar/Navbar'
import WebTop from '../WebTop/WebTop'
import USP from '../USP/USP'
import MobileSection from '../MobileSection/MobileSection'
import VendorBG from '../../assets/group-13.png'
import Testimonial from '../TestimonialSection/Testimonial'
import Footer from '../Footer/Footer'

class Vendor extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <WebTop BG={VendorBG} highlight="Hurry's there to help you with deliveries" subText="We help your business to cater with the hyperlocal super fast delivery. Join us today" buttonText="BECOME A VENDOR" />
                <USP />
                <MobileSection />
                <Testimonial/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Vendor