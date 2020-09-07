import React from 'react'
import classes from './HomepageTop.module.css'
import HomepageBG from '../../assets/HomepageMain.png'
import Pin from '../../assets/pin.svg'

class HomepageTop extends React.Component{
    render(){
        return(
            <div className={classes.HomepageTop}>
                <img className={classes.BG} src={HomepageBG} alt="Background" />
                <span className={classes.MainText}>Get <span className={classes.Highlite}>home food</span> delivered at your doorstep.</span>
                <div className={classes.Rectangle}>
                    <input type="text" placeholder="Enter delivery location" />
                    <div className={classes.Locate}>
                        <img src={Pin} alt="Pin" />
                        <span>Locate Me</span>
                    </div>
                    <button className={classes.ProceedButton}>Proceed</button>
                </div>
                <div className={classes.Frequent}>
                    <span>Frequent Locations: </span>
                    <span>Bangalore, Pune, Hyderabad, Chennai</span>   
                </div>
            </div>
        )
    }
}

export default HomepageTop