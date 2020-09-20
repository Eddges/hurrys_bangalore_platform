import React from 'react';
import CustomerHeader from '../CustomerHeader';
import styles from '../CustomerSupport.module.css';
import classes from './CustomerFAQ.module.css';


function CustomerFAQ() {
    return (
        <div className = {styles.container}>
              <CustomerHeader/>
              <div className = {classes.ques_container}>
                  <div className = {classes.ques_box_area}>
                    <div className = {classes.ques_box}>
                        <p className = {classes.heading} >Question 1</p>
                        <p className = {classes.answer} >Answe1 with a big senetense tht will eventually go to the second line. Answe1 with a big senetense tht will eventually go to the second line…</p>
                    </div>


                    <div className = {classes.ques_box}>
                        <p className = {classes.heading} >Question 1</p>
                        <p className = {classes.answer} >Answe1 with a big senetense tht will eventually go to the second line. Answe1 with a big senetense tht will eventually go to the second line…</p>
                    </div>

                    <div className = {classes.ques_box}>
                        <p className = {classes.heading} >Question 1</p>
                        <p className = {classes.answer} >Answe1 with a big senetense tht will eventually go to the second line. Answe1 with a big senetense tht will eventually go to the second line…</p>
                    </div>

                    <div className = {classes.ques_box}>
                        <p className = {classes.heading} >Question 1</p>
                        <p className = {classes.answer} >Answe1 with a big senetense tht will eventually go to the second line. Answe1 with a big senetense tht will eventually go to the second line…</p>
                    </div>

                    <div className = {classes.ques_box}>
                        <p className = {classes.heading} >Question 1</p>
                        <p className = {classes.answer} >Answe1 with a big senetense tht will eventually go to the second line. Answe1 with a big senetense tht will eventually go to the second line…</p>
                    </div>

                    <div className = {classes.ques_box}>
                        <p className = {classes.heading} >Question 1</p>
                        <p className = {classes.answer} >Answe1 with a big senetense tht will eventually go to the second line. Answe1 with a big senetense tht will eventually go to the second line…</p>
                    </div>
                  </div>

                  
              </div>
        </div>
          
        
        
    )
}

export default CustomerFAQ
