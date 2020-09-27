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
import {database} from '../../firebase'


class Categories extends React.Component{
    state = {
        loadCategory : false
    }

    componentWillMount() {
        database.ref('/Masters').child('Category').once('value', snapshot => {
            this.setState({
                ...this.state,
                ...snapshot.val()
            }, () => {
                this.setState({
                    ...this.state,
                    loadCategory : true
                })
            })
        })
    }
    render(){
        return(
            <div className={classes.Categories}>
                <span className={classes.Heading}>Categories we serve</span>
                {
                    this.state.loadCategory ? 
                    <div className={classes.CategoriesMain}>
                    <CategoryCard icon={food} text="Food Delivery" toLink="food" unavailable={this.state['Food Delivery'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={grocery} text="Groceries & Essentials" toLink="grocery" unavailable={this.state['Groceries & Essentials'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={fruits} text="Fruits & Vegetables" toLink="fruits_veggies" unavailable={this.state['Fruits & Vegetables'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={homeFood} text="Home Food" toLink="home" unavailable={this.state['Home Food'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={pet} text="Pet Supplies" toLink="pet" unavailable={this.state['Pet Supplies'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={meds} text="Medicine Stores" toLink="meds" unavailable={this.state['Medicine Store'].Status==='InActive' ? true : false}/>
                    <CategoryCard icon={apparels} text="Apparels" toLink="apparels" unavailable={this.state['Fashion'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={gift} text="Gift Shop" toLink="gift" unavailable={this.state['Gift Shop'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={health} text="Health & Wellness" toLink="health" unavailable={this.state['Health & Wellness'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={pkg} text="Package Pickup" toLink="package" unavailable={this.state['Package Pickup'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={taxi} text="Taxi Service" toLink="taxi" unavailable={this.state['Taxi Service'].Status==='InActive' ? true : false} />
                    <CategoryCard icon={fish} text="Fish & Meat" toLink="fish_meat" unavailable={true} unavailable={this.state['Meat & Fish'].Status==='InActive' ? true : false} />
                </div> : 
                null
                }
                
            </div>
        )
    }
}

export default Categories