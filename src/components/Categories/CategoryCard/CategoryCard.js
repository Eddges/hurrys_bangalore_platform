import React from 'react'
import classes from './CategoryCard.module.css'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const CategoryCard = (props) => {

    const hrStyle = {
        flexDirection : 'row'
    }

    // console.log('State : ', props.ctr)
    let link = '/shops'

    switch(props.toLink) {
        case 'package' : 
            link = '/package'
            break
    }

    return(
        <div className={classes.Container } onClick={() => {
            props.onChangeCategory(props.text)
            window.scrollTo(0, 0)
            if(props.red.location.generalAddress) {
                props.history.push(`${props.unavailable ? '/redirect' : link}`)
            }
            else {
                alert('Please select an address')
            }
            }} >
            <div className={classes.Icon}>
                <img src={props.icon} alt="Icon" />
            </div>
            <span className={classes.Text}>{props.text}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        red : state.red
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryCard))