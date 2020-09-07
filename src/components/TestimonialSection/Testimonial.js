import React from 'react';
import styles from './Testimonial.module.css';
import avatar from '../../assets/avatar2.jpg';

function Testimonial() {
    return (
        <div className = {styles.testimonial_wrapper} >
            <div className = {styles.header_wrapper}>
                <p>What do our delivery partners say</p>
            </div>
            <div className = {styles.box_container}>
                <div className = {styles.box}>
                    <div className = {styles.box_up}>
                        <img src = {avatar}/>
                        <p className = {styles.name}>Rounak Shah</p>
                        <p className = {styles.place}>Bangalore</p>
                    </div>
                    <div className = {styles.box_down}>
                        <div className = {styles.content}>
                        <p>Hurry’s is the best app ever. They'll get you anything you need 24*7. Even if it's a pack of cigarettes after 12 midnight they'll get it delivered and delivered fast! Great user experience. I'm a happy customer.</p>

                        </div>
                    </div>
                </div>
                <div className = {styles.box}>
                <div className = {styles.box_up}>
                        <img src = {avatar}/>
                        <p className = {styles.name}>Rounak Shah</p>
                        <p className = {styles.place}>Bangalore</p>
                    </div>
                    <div className = {styles.box_down}>
                        <div className = {styles.content}>
                        <p>Hurry’s is the best app ever. They'll get you anything you need 24*7. Even if it's a pack of cigarettes after 12 midnight they'll get it delivered and delivered fast! Great user experience. I'm a happy customer.</p>

                        </div>
                    </div>
                </div>
                <div className = {styles.box}>
                <div className = {styles.box_up}>
                        <img src = {avatar}/>
                        <p className = {styles.name}>Rounak Shah</p>
                        <p className = {styles.place}>Bangalore</p>
                    </div>
                    <div className = {styles.box_down}>
                        <div className = {styles.content}>
                        <p>Hurry’s is the best app ever. They'll get you anything you need 24*7. Even if it's a pack of cigarettes after 12 midnight they'll get it delivered and delivered fast! Great user experience. I'm a happy customer.</p>

                        </div>
                    </div>
                </div>
                <div className = {styles.box}>
                <div className = {styles.box_up}>
                        <img src = {avatar}/>
                        <p className = {styles.name}>Rounak Shah</p>
                        <p className = {styles.place}>Bangalore</p>
                    </div>
                    <div className = {styles.box_down}>
                        <div className = {styles.content}>
                        <p>Hurry’s is the best app ever. They'll get you anything you need 24*7. Even if it's a pack of cigarettes after 12 midnight they'll get it delivered and delivered fast! Great user experience. I'm a happy customer.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
