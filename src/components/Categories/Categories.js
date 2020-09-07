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
                    <CategoryCard icon={grocery} text="Grocery & Essentials" toLink="/grocery" />
                    <CategoryCard icon={food} text="Food" toLink="/grocery" />
                    <CategoryCard icon={fruits} text="Fruits & Vegetables" toLink="/grocery" />
                    <CategoryCard icon={fish} text="Fish & Meat" toLink="/grocery" />
                    <CategoryCard icon={pet} text="Pet Supplies" toLink="/grocery" />
                    <CategoryCard icon={gift} text="Gift Shop" toLink="/grocery" />
                    <CategoryCard icon={meds} text="Medicine Stores" toLink="/grocery" />
                    <CategoryCard icon={apparels} text="Apparels" toLink="/grocery" />
                    <CategoryCard icon={health} text="Health & Wellness" toLink="/grocery" />
                    <CategoryCard icon={pkg} text="Package Pickup" toLink="/grocery" />
                    <CategoryCard icon={taxi} text="Taxi Service" toLink="/grocery" />
                    <CategoryCard icon={homeFood} text="Home Food" toLink="/grocery" />

                </div>
            </div>
        )
    }
}

export default Categories