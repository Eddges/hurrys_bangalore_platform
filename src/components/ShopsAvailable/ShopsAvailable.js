import React from 'react'
import classes from './ShopsAvailable.module.css'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import Footer from '../Footer/Footer'
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
import bazaar from '../../assets/bazaar.jpeg'
import CategoryCard from '../Categories/CategoryCard/CategoryCard'
import CategoryCardShops from '../CategoryCardShops/CategoryCardShops'
import AvailableShopsCard from '../AvailableShopsCard/AvailableShopsCard'

class ShopsAvailable extends React.Component{

    state={
        active: "Food",
        shops : [
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'Grocery & Essentials',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Food',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'Food',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'Food',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            }
        ]
    }

    handleCurrent = (value) => {
        this.setState({
            ...this.state,
            active : value
        })
    }

    render(){

        return(
            <div className={classes.Container}>
                <NavbarAlt />
                <div className={classes.Main}>
                    <div className={classes.Left}>
                        <CategoryCardShops icon={grocery} text="Grocery & Essentials" active={this.state.active} handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={food} text="Food" active={this.state.active} handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={fruits} text="Fruits & Vegetables" active={this.state.active} handleCurrent={(value) => {this.handleCurrent(value)}}/>
                        <CategoryCardShops icon={fish} text="Fish & Meat" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={pet} text="Pet Supplies" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={gift} text="Gift Shop" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={meds} text="Medicine Stores" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={apparels} text="Apparels" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={health} text="Health & Wellness" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={pkg} text="Package Pickup" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={taxi} text="Taxi Service" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                        <CategoryCardShops icon={homeFood} text="Home Food" toLink="/grocery" handleCurrent={(value) => {this.handleCurrent(value)}} />
                    </div>
                    <div className={classes.Right}>
                        <span className={classes.Heading}>Available Shops</span>
                        <div className={classes.AvailableList}>
                            {
                                this.state.shops.map((iterator, index) => {
                                    if(this.state.active===iterator.category && iterator.available) {
                                        return(
                                            <AvailableShopsCard {...iterator} available={true} />
                                        )
                                    }
                                })
                            }
                        </div>
                        <span className={classes.Heading}>Unvailable Shops</span>
                        <div className={classes.AvailableList}>
                        {
                                this.state.shops.map((iterator, index) => {
                                    if(this.state.active===iterator.category && !iterator.available) {
                                        return(
                                            <AvailableShopsCard {...iterator} available={false} />
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShopsAvailable