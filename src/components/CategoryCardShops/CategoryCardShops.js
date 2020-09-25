import React from 'react'
import classes from './CategoryCardShops.module.css'
import {connect} from 'react-redux'

const CategoryCardShops = (props) => {

    return(
        <div className={classes.Container } style={props.activeCategory===props.text ? {'backgroundColor' : '#00b246'} : null} 
            onClick={() => {
                props.changeCategory(props.text)
                window.scrollTo(0, 0)
            }}>
            {console.log(props.activeCategory)}
            <div className={classes.Icon}>
                <img src={props.icon} alt="Icon" />
            </div>
            <span className={classes.Text} style={props.activeCategory===props.text ? {'color' : '#fff'} : null}>{props.text}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        activeCategory : state.red.categoryDisplay
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeCategory : (category) => dispatch({
            type : 'CHANGE_CATEGORY', 
            category : category
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCardShops)