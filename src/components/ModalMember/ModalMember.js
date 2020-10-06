import React from 'react'
import classes from './ModalMember.module.css'

class ModalMember extends React.Component {
    render() {
        return(
            <div className={classes.Container}>
                <div className={classes.Main}>
                    <form>
                        <input placeholder="Name" />
                        <input placeholder="Phone" />
                        {
                            this.props.cat==='Delivery' ? 
                            <select placeholder="Category">
                                <option>Restaurants</option>
                                <option>Meat & Fish</option>
                                <option>Groceries & Essentials</option>
                                <option>Home Food</option>
                            </select> : 
                            <select placeholder="Type of vehicle">
                                <option>Bike</option>
                                <option>Car</option>
                            </select>
                        }
                        
                        <input placeholder="Referral Code" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ModalMember