import React from 'react'
import classes from './ProductsGrocery.module.css'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import Footer from '../Footer/Footer'
import ProductGroceryMain from '../ProductGroceryMain.js/ProductGroceryMain'

class ProductsGrocery extends React.Component{
    render() {
        return(
            <div className={classes.Container}>
                <NavbarAlt />
                <ProductGroceryMain />
                <Footer />
            </div>
        )
    }
}

export default ProductsGrocery