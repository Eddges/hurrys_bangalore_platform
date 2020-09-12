import React from 'react'
import Navbar from '../Navbar/Navbar'
import WebTop from '../WebTop/WebTop'
import USP from '../USP/USP'
import MobileSection from '../MobileSection/MobileSection'
import HomepageTop from '../HomepageTop/HomepageTop'
import Categories from '../Categories/Categories'
import Testimonial from '../TestimonialSection/Testimonial';
import Footer from '../Footer/Footer'

class Cancellation extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <div class="col-lg-12 col-sm-12" style={{marginTop:"20vh"}} >
                     <div class="about-content">
                        <h1 style={{fontSize:'36px !important',textAlign:'center',marginBottom:'5%'}}>Refund policy</h1>
<p>We're so convinced you'll absolutely love our products, that we're willing to offer a 3 day risk free money back guarantee. If you receive your order and are not satisfied for any reason you can return the product for a refund within 3 days of making a purchase.</p>
<p>Perishable goods are completely exempt from being returned.</p>
<h2>Proof of purchase</h2>
<p>To complete your refund, we require a receipt, purchase order or other proof of purchase. Please note that without the aforementioned proof of purchase, we will not issue a refund but will provide you with a store credit instead.</p>
<h2>Shipping items</h2>
<p>Visit any of our retail locations to return your items purchased through our online store. Our staff member will process your return or exchange for you.</p>
<p>You must take care to ensure that the goods are properly packaged so that they will not be damaged while in transit. If the product is found damaged or used beyond what it takes for us to reasonably inspect it, then we may reject a refund.</p>
<h2>Contacting us</h2>
<p>If you would like to contact us concerning any matter relating to this Refund Policy, you may write a letter to support@hurrys.co.uk</p>
<p>This document was last updated on August 5, 2020</p>
                    <br/><br/>
                     </div>
                  </div>
              <Footer/>
            </React.Fragment>
        )
    }
}

export default Cancellation