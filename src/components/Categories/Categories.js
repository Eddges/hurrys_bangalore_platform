import React from 'react'
import classes from './Categories.module.css'
import CategoryCard from './CategoryCard/CategoryCard'
import grocery from '../../assets/grocery-icon.svg'
import food from '../../assets/food-icon.svg'
import fish from '../../assets/fish-meat.svg'
import pet from '../../assets/pet-supplies.svg'
import gift from '../../assets/gifts.svg'
import meds from '../../assets/medicine-stores.svg'
import apparels from '../../assets/apparels-copy.svg'
import health from '../../assets/group.svg'
import pkg from '../../assets/delivery.svg'
import homeFood from '../../assets/home-food.png'
import fruits from '../../assets/fruits-vegetables.svg'
import taxi from '../../assets/taxi.svg'


class Categories extends React.Component{
    render(){
        return(
            <div className={classes.Categories}>
                <span className={classes.Heading}>Categories we serve</span>
                <div className={classes.CategoriesMain}>
                    <CategoryCard icon={grocery} text="Grocery & Essentials" toLink="grocery" />
                    <CategoryCard icon={food} text="Food" toLink="food" />
                    <CategoryCard icon={fruits} text="Fruits & Vegetables" toLink="fruits_veggies" />
                    <CategoryCard icon={fish} text="Fish & Meat" toLink="fish_meat" />
                    <CategoryCard icon={pet} text="Pet Supplies" toLink="pet" />
                    <CategoryCard icon={gift} text="Gift Shop" toLink="gift" />
                    <CategoryCard icon={meds} text="Medicine Stores" toLink="meds" />
                    <CategoryCard icon={apparels} text="Apparels" toLink="apparels" />
                    <CategoryCard icon={health} text="Health & Wellness" toLink="health" />
                    <CategoryCard icon={pkg} text="Package Pickup" toLink="package" />
                    <CategoryCard icon={taxi} text="Taxi Service" toLink="taxi" />
                    <CategoryCard icon={homeFood} text="Home Food" toLink="home" />

                </div>
            </div>
        )
    }
}

export default Categories