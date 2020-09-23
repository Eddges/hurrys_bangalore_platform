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
import firebase, {database} from '../../firebase'

class ShopsAvailable extends React.Component{

    state={
        active: "Groceries & Essentials",
        availableShopsActive : [],
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

    componentDidMount() {
        database.ref('/Vendor').on('value', snapshot => {
            const allShopsObject = snapshot.val()
            const allShopsKeys = Object.keys(snapshot.val())
            const allShopsArray = allShopsKeys.map((iterator, index) => {
                if(allShopsObject[iterator].Location){
                    const shopLocation = allShopsObject[iterator].Location.split(',')

                    const lat1 = shopLocation[0]
                    const lon1 = shopLocation[1]
                    
                    const lat2 = this.props.activeLocation.latitude
                    const lon2 = this.props.activeLocation.longitude
                    var R = 6371; // Radius of the earth in km
                    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
                    var dLon = this.deg2rad(lon2-lon1); 
                    var a = 
                    Math.sin(dLat/2) * Math.sin(dLat/2) +
                    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2)
                    ; 
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                    var d = R * c; // Distance in km
                    // return d;

                    if(d<=10) {
                        const ava = this.state.availableShopsActive
                        ava.push({
                            ...allShopsObject[iterator],
                            d
                        })
                        this.setState({
                            ...this.state,
                            availableShopsActive : ava
                        })
                    }

                }
                
            })
        })
    }
    deg2rad = (deg) => {
        return deg * (Math.PI/180)
      }

    printActive = () => {
        console.log(this.state.availableShopsActive)
    }

    render(){

        return(
            <div className={classes.Container}>
                <NavbarAlt />
                {/* <button onClick={this.printActive}>Print Available Active Shops</button> */}
                <div className={classes.Main}>
                    <div className={classes.Left}>
                        <CategoryCardShops icon={grocery} text="Groceries & Essentials" toLink="grocery" />
                        <CategoryCardShops icon={food} text="Food Delivery" toLink="food" active={this.state.active} />
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
                                this.state.availableShopsActive.map((iterator, index) => {
                                    if(this.props.activeCategory===iterator.Category) {
                                        {/* console.log('Iterator : ', iterator) */}
                                        return(
                                            <AvailableShopsCard icon={bazaar} discount="Upto 40% Off" {...iterator} available={false} key={index} />
                                        )
                                    }
                                })
                            }
                        </div>
                        <span className={classes.Heading}>Unvailable Shops</span>
                        <div className={classes.AvailableList}>
                        {/* {
                                this.state.availableShopsActive.map((iterator, index) => {
                                    if(this.props.activeCategory===iterator.Category) {
                                        console.log('Iterator : ', iterator)
                                        return(
                                            <AvailableShopsCard {...iterator} available={false} key={index} />
                                        )
                                    }
                                })
                            } */}
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
        activeCategory : state.red.categoryDisplay,
        activeLocation : state.red.location
    }
}


export default connect(mapStateToProps)(ShopsAvailable)