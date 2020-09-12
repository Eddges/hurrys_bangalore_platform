import React from 'react'
import classes from './CategoryCard.module.css'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

const CategoryCard = (props) => {

    const hrStyle = {
        flexDirection : 'row'
    }

    // console.log('State : ', props.ctr)

    return(
        <NavLink className={classes.Container } to="/shops" onClick={() => {
            props.onChangeCategory(props.toLink)
            window.scrollTo(0, 0)
            }} >
            <div className={classes.Icon}>
                <img src={props.icon} alt="Icon" />
            </div>
            <span className={classes.Text}>{props.text}</span>
        </NavLink>
    )
}

const mapStateToProps = state => {
    return {
        ctr : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeCategory : (category) => dispatch({
            type : 'CHANGE_CATEGORY',
            category : category
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard)