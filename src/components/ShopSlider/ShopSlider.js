import React from 'react'
import classes from './ShopSlider.module.css'

class ShopSlider extends React.Component {

    state={
        shift : 0
    }

    render(){

        const handleLeft = () => {
            console.log(this.state.shift)
            if(this.state.shift<0){
                this.setState({
                    ...this.state,
                    shift : this.state.shift + 300
                })
            }
        }
        const handleRight = () => {
            this.setState({
                ...this.state,
                shift : this.state.shift - 300
            })
        }
        return(
            <div className={classes.Container} style={{'backgroundColor' : `${this.props.bgColor ? this.props.bgColor : '#fff'}`}}>
                <div className={classes.Heading}>{this.props.heading}</div>
                <div className={classes.Slider} style={{'transform' : `translateX(${this.state.shift}px)`}}>
                    {this.props.items.map((iterator, index) => {
                        return(
                            <div className={classes.SliderItem} key={index}>
                                <img src={iterator.image} alt={iterator.item} />
                            </div>
                        )
                    })}
                </div>
                <div className={classes.Controls}>
                    <div className={classes.Left}></div>
                    <div className={classes.Right}>
                    <ion-icon name="chevron-back" onClick={handleLeft}></ion-icon>
                    <ion-icon name="chevron-forward" onClick={handleRight}></ion-icon>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopSlider