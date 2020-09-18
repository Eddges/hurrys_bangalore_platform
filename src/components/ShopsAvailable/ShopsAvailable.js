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
import { connect } from 'react-redux'

class ShopsAvailable extends React.Component{

    state={
        active: "food",
        shops : [
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'grocery',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'food',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : true,
                category : 'food',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Bangalore Bazaar',
                available : false,
                category : 'food',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Fruits Market',
                available : true,
                category : 'fruits_veggies',
                delivery : '2 hour',
                distance : '7 km',
                icon : bazaar,
                location : 'HSR Layout',
                discount : 'Upto 40% off'
            },
            {
                name : 'Unavailable Fruits Market',
                available : false,
                category : 'fruits_veggies',
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
                        <CategoryCardShops icon={grocery} text="Grocery & Essentials" toLink="grocery" />
                        <CategoryCardShops icon={food} text="Food" toLink="food" active={this.state.active} />
                        <CategoryCardShops icon={fruits} text="Fruits & Vegetables" toLink="fruits_veggies" />
                        <CategoryCardShops icon={homeFood} text="Home Food" toLink="home" />
                        {/* <CategoryCardShops icon={fish} text="Fish & Meat" toLink="fish_meat" />
                        <CategoryCardShops icon={pet} text="Pet Supplies" toLink="pet" />
                        <CategoryCardShops icon={gift} text="Gift Shop" toLink="gift" />
                        <CategoryCardShops icon={meds} text="Medicine Stores" toLinkt="meds" />
                        <CategoryCardShops icon={apparels} text="Apparels" toLink="apparels" />
                        <CategoryCardShops icon={health} text="Health & Wellness" toLink="health" />
                        <CategoryCardShops icon={pkg} text="Package Pickup" toLink="package" />
                        <CategoryCardShops icon={taxi} text="Taxi Service" toLink="taxi" /> */}
                    </div>
                    <div className={classes.Right}>
                        <span className={classes.Heading}>Available Shops</span>
                        <div className={classes.AvailableList}>
                            {
                                this.state.shops.map((iterator, index) => {
                                    console.log('Active Category : ', this.props.activeCategory)
                                    if(this.props.activeCategory===iterator.category && iterator.available) {
                                        
                                        return(
                                            <AvailableShopsCard {...iterator} available={true} key={index} />
                                        )
                                    }
                                })
                            }
                        </div>
                        <span className={classes.Heading}>Unvailable Shops</span>
                        <div className={classes.AvailableList}>
                        {
                                this.state.shops.map((iterator, index) => {
                                    if(this.props.activeCategory===iterator.category && !iterator.available) {
                                        return(
                                            <AvailableShopsCard {...iterator} available={false} key={index} />
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

const mapStateToProps = state => {
    return{
        activeCategory : state.categoryDisplay
    }
}


export default connect(mapStateToProps)(ShopsAvailable)