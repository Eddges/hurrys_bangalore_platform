import React from 'react';
import styles from './Testimonial.module.css';
import avatar from '../../assets/avatar2.jpg';

function Testimonial() {
    return (
        <div className = {styles.testimonial_wrapper} >
            <div className = {styles.header_wrapper}>
                <p>What our customers say</p>
            </div>
            <div className={styles.parent_container}>
                <div className = {styles.box_container}>
                    <div className = {styles.box}>
                        <div className = {styles.box_up}>
                            <div className={styles.avatar}>
                            <img src = {avatar}/>
                            </div>
                            
                            <p className = {styles.name}>Rounak Shah</p>
                            <p className = {styles.place}>Luton, UK</p>
                        </div>
                        <div className = {styles.box_down}>
                            <div className = {styles.content}>
                            <p>Hurrys lets you order your favourite groceries, food and household products from
                                trusted local retailers, who otherwise may not offer instant delivery.</p>

                            </div>
                        </div>
                    </div>
                    <div className = {styles.box}>
                    <div className = {styles.box_up}>
                        <div className={styles.avatar}>
                            <img src = {avatar}/>
                        </div>
                            <p className = {styles.name}>Rounak Shah</p>
                            <p className = {styles.place}>Luton, UK</p>
                        </div>
                        <div className = {styles.box_down}>
                            <div className = {styles.content}>
                            <p>Hurrys lets you order your favourite groceries, food and household products from
                                trusted local retailers, who otherwise may not offer instant delivery. We want to
                                connect people with local retailers in the shortest period of time. Our customers are
                                as passionate about great food and products as we are! Hurrys was created as a
                                business where customers come first. Our team aims to bring our customer service
                                on a completely new level with no difference in costs. Our business is operated by a
                                group of enthusiastic and highly educated individuals who have seen a gap in the
                                market.</p>

                            </div>
                        </div>
                    </div>
                    <div className = {styles.box}>
                    <div className = {styles.box_up}>
                        <div className={styles.avatar}>
                            <img src = {avatar}/>
                        </div>                        <p className = {styles.name}>Rounak Shah</p>
                            <p className = {styles.place}>Luton, UK</p>
                        </div>
                        <div className = {styles.box_down}>
                            <div className = {styles.content}>
                            <p>Hurrys lets you order your favourite groceries, food and household products from
                                trusted local retailers, who otherwise may not offer instant delivery. We want to
                                connect people with local retailers in the shortest period of time. Our customers are
                                as passionate about great food and products as we are! Hurrys was created as a
                                business where customers come first. Our team aims to bring our customer service
                                on a completely new level with no difference in costs. Our business is operated by a
                                group of enthusiastic and highly educated individuals who have seen a gap in the
                                market.</p>

                            </div>
                        </div>
                    </div>
                    <div className = {styles.box}>
                    <div className = {styles.box_up}>
                        <div className={styles.avatar}>
                            <img src = {avatar}/>
                        </div>                        <p className = {styles.name}>Rounak Shah</p>
                            <p className = {styles.place}>Luton, UK</p>
                        </div>
                        <div className = {styles.box_down}>
                            <div className = {styles.content}>
                            <p>Hurrys lets you order your favourite groceries, food and household products from
                                trusted local retailers, who otherwise may not offer instant delivery. We want to
                                connect people with local retailers in the shortest period of time. Our customers are
                                as passionate about great food and products as we are! Hurrys was created as a
                                business where customers come first. Our team aims to bring our customer service
                                on a completely new level with no difference in costs. Our business is operated by a
                                group of enthusiastic and highly educated individuals who have seen a gap in the
                                market.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
