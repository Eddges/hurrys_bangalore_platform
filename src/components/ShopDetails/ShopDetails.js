import React from 'react'
import Footer from '../Footer/Footer'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './ShopDetails.module.css'
import ShopDetailsTop from '../ShopDetailsTop/ShopDetailsTop'
import ShopCategories from '../ShopCategories/ShopCategories'
import ShopSlider from '../ShopSlider/ShopSlider'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'


const ShopDetails = (props) => {

    const Slider1 = [
        {
            item : 'burger',
            image : banner1
        },
        {
            item : 'luxury',
            image : banner2
        },
        {
            item : 'luxury2',
            image : banner2
        },
        {
            item : 'luxury3',
            image : banner2
        },
        {
            item : 'luxury4',
            image : banner2
        }
    ]

    return(
        <React.Fragment>
            <NavbarAlt />
            <ShopDetailsTop />
            <ShopCategories />
            <ShopSlider items={Slider1} />
            <ShopSlider items={Slider1} bgColor="#f3f3fa" heading="Curated for you" />
            <div className={classes.Others}>
                <span className={classes.Heading}>Others</span>
                <div className={classes.Main}>
                    <div className={classes.Item}>
                        <img src={banner1} alt="Banner 1" />
                    </div>
                    <div className={classes.Item}>
                        <img src={banner2} alt="Banner 2" />
                    </div>
                    <div className={classes.Item}>
                        <img src={banner2} alt="Banner 3" />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default ShopDetails