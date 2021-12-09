import React from 'react';
import styles from "./styles/interiorsectiontwo.module.css";

const Sectiontwo = () =>{
	return(
		<div className={styles.Sectiontwo}>
      <div className={styles.frameblock}>
        <div>
        <h3 className={styles.h3text}>Why us?</h3>
        </div>
        <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.block}>
            <div className={styles.blockimg}>
            <img src="Heart.png" alt=""/>
            </div>
            <div>
            <p className={styles.text}>1500+ Happy Clients</p>
            <p className={styles.texts}>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.block}>
          <div className={styles.blockimg}>
            <img src="home.png" alt=""/>
            </div>
            <div>
            <p className={styles.text}>1500+ Happy Clients</p>
            <p className={styles.texts}>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.block}>
          <div className={styles.blockimg}>
            <img src="Ticket Star.png" alt=""/>
            </div>
            <div>
            <p className={styles.text}>1500+ Happy Clients</p>
            <p className={styles.texts}>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.block}>
          <div className={styles.blockimg}>
            <img src="Star.png" alt=""/>
            </div>
            <div>
            <p className={styles.text}>1500+ Happy Clients</p>
            <p className={styles.texts}>Lorem ipsum dolor sit amet, consectetur adipisc elit. Eget eu cras </p>
            </div>
          </div>
        </div>

        </div>
         
      </div>
    </div>	
	);
};
  
export default Sectiontwo;