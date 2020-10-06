import React from 'react'
import Navbar from '../Navbar/Navbar'
import WebTop from '../WebTop/WebTop'
import USP from '../USP/USP'
import MobileSection from '../MobileSection/MobileSection'
import DeliveryBG from '../../assets/DeliveryMain.png'
import Footer from '../../components/Footer/Footer'
import Testimonial from '../../components/TestimonialSection/Testimonial'
import ModalMember from '../ModalMember/ModalMember'

class Delivery extends React.Component{
    state = {
        showModal : false
    }

    showModal = () => {
        this.setState({
            ...this.state,
            showModal : true
        })
    }
    render(){
        return(
            <React.Fragment>
                <Navbar />
                {
                    this.state.showModal ?
                    <ModalMember cat="Delivery" /> : null
                }
                <WebTop BG={DeliveryBG} highlight="Change Lives and Start Earning" subText="Help us reach millions hearts by becoming delivery partner for Hurry's" buttonText="RIDE WITH US" showModal={this.showModal} />
                <USP />
                <MobileSection />
                <Testimonial/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Delivery