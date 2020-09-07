import React from 'react'
import Navbar from '../Navbar/Navbar'
import WebTop from '../WebTop/WebTop'
import USP from '../USP/USP'
import MobileSection from '../MobileSection/MobileSection'
import HomepageTop from '../HomepageTop/HomepageTop'
import Categories from '../Categories/Categories'

class Homepage extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <HomepageTop />
                <Categories />
                <USP />
                <MobileSection />
            </React.Fragment>
        )
    }
}

export default Homepage