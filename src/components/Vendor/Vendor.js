import React from 'react'
import Navbar from '../Navbar/Navbar'
import WebTop from '../WebTop/WebTop'
import USP from '../USP/USP'

class Vendor extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <WebTop />
                <USP />
            </React.Fragment>
        )
    }
}

export default Vendor