import React from 'react';
import CustomerHeader from '../CustomerHeader';
import styles from '../CustomerSupport.module.css';
import classes from './FaqQues.module.css';

function FaqQues() {
    return (
        <div className = {styles.container}>
            <CustomerHeader/>
            <div className = {classes.ques_container}>
                <div className = {classes.quesArea}>
                    <div className = {classes.left}>
                        <p className = {classes.heading} >Question 1</p>
                        <p className = {classes.text}>Answe1 with a big senetense tht will eventually go to the second line. Answe1 with a big senetense tht will eventually go to the second line Answe1 with a big senetense tht will eventually go to the second lineAnswe1 with a big senetense tht will eventually go to the second lineAnswe1 with a big senetense tht will eventually go to the second lineAnswe1 with a big senetense tht will eventually go to the second lineAnswe1 with a big senetense tht will eventually go to the second lineAnswe1 with a big senetense tht will eventually go to the second line…</p>
                    </div>
                    <div className = {classes.right}>
                        <div className = {classes.content_wrapper}>
                            <div className = {classes.content}>
                                <p className = {classes.heading}>Related Questions</p>
                                <p>Question 1</p>
                                <p>Question 2</p>
                                <p>Question 3</p>
                                <p>Question 4</p>
                                <p>Quesiton 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FaqQues
