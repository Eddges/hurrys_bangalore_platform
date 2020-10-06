import React from 'react'
import Footer from '../Footer/Footer'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './CategoryRedirect.module.css'
import Logo from '../../assets/LogoBlack.png'
import food from '../../assets/food-icon.svg'
import grocery from '../../assets/grocery-icon.svg'
import fruits from '../../assets/fruits-vegetables.svg'
import homeFood from '../../assets/home-food.png'
import CategoryCard from '../Categories/CategoryCard/CategoryCard'
import fish_meat from '../../assets/fish-meat.svg'

const CategoryRedirect = (props) => {

    return(
        <div className={classes.Container}>
            <NavbarAlt />
            <div className={classes.Main}>
                <div className={classes.Logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <span className={classes.Soon}>Coming Soon</span>
                <span className={classes.Available}>The following categories are already available</span>
                <div className={classes.Categories}>
                    <CategoryCard icon={food} text="Food Delivery" toLink="food" />
                    <CategoryCard icon={grocery} text="Groceries & Essentials" toLink="grocery" />
                    <CategoryCard icon={fish_meat} text="Meat & Fish" toLink="fish_meat" />
                    <CategoryCard icon={homeFood} text="Home Food" toLink="home" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CategoryRedirect