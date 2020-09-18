import React from 'react'
import NavbarAlt from '../NavbarAlt/NavbarAlt'
import classes from './RateUs.module.css'
import GreenBG from '../../assets/GreenBottom.svg'
import PlayStore from '../../assets/PlayStoreIcon.png'
import AppleStore from '../../assets/AppleStoreIcon.png'
import ManThumbsUp from '../../assets/ManThumbsUp.jpeg'
import StarRatings from 'react-star-ratings'
import {withRouter} from 'react-router-dom'

class RateUs extends React.Component {
    state = {
        deliveryRating : 5,
        partnerRating : 5
    }

    changeRatingDelivery = (newRating, name) => {
        this.setState({
            ...this.state,
            deliveryRating : newRating
            
        })
    }
    changeRatingPartner = (newRating, name) => {
        this.setState({
            ...this.state,
            partnerRating : newRating
        })
    }
    handleClose = () => {
        this.props.history.push('/')
    }
    handleSubmit = () => {
        this.props.history.push('/')
    }

    render() {
        return(
            <div className={classes.Container}>
                <NavbarAlt />

                <div className={classes.Main}>
                    <div className={classes.Left}>
                        <div className={classes.Feedback}>
                            <div className={classes.Top}>
                                <span className={classes.RateUs}>Rate Us</span>
                                <ion-icon name="close" onClick={this.handleClose}></ion-icon>
                            </div>
                            <span className={classes.HRLine}></span>
                            <div className={classes.DeliveryFeedback}>
                                <span className={classes.Heading}>How did you like the service from our delivery executive?</span>
                                <div className={classes.Stars}>
                                    <StarRatings
                                        rating={this.state.deliveryRating}
                                        starRatedColor="#ffbc00"
                                        starDimension="30px"
                                        starHoverColor="#ffbc00C5"
                                        changeRating={this.changeRatingDelivery}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </div>
                                <input className={classes.DeliveryInput} placeholder="Optional Feedback" type="text" />
                            </div>
                            
                            <div className={classes.DeliveryFeedback}>
                                <span className={classes.Heading}>How was the order from our partner store?</span>
                                <div className={classes.Stars}>
                                    <StarRatings
                                        rating={this.state.partnerRating}
                                        starRatedColor="#ffbc00"
                                        starDimension="30px"
                                        starHoverColor="#ffbc00C5"
                                        changeRating={this.changeRatingPartner}
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </div>
                                <input className={classes.DeliveryInput} placeholder="Optional Feedback" type="text" />
                            </div>
                            <button type="button" className={classes.SubmitButton} onClick={this.handleSubmit}>SUBMIT</button>
                        </div>
                    </div>
                    <div className={classes.Right}>
                        <img src={ManThumbsUp} alt="Hurrys Man" />
                    </div>
                </div>

                <div className={classes.Bottom}>
                    <img className={classes.BG} src={GreenBG} alt="Background" />
                    <div className={classes.Right}>
                        <span className={classes.Heading}>Download the app for a smoother experience</span>
                        <span className={classes.SubHeading}>Get things done right from your phone</span>
                        <div className={classes.Icons}>
                            <img src={PlayStore} alt="Play Store" />
                            <img src={AppleStore} alt="Apple Store" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(RateUs)