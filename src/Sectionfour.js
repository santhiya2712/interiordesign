import React, { useLayoutEffect } from 'react';
import Sectiontwo from './Sectiontwo';
import styles from "./styles/interiorsectionfour.module.css"

const Sectionfour = () => {
    return(
      <div  className={styles.Sectionfour}>
        <div>
        <h3 className={styles.h3text}>Listen from our Clients</h3>
        </div>
        <div className={styles.frame}>
          <div className={styles.row}>
            <div className={styles.column}>
              <img src="profile.png" alt=" "/>
              <p className={styles.text1}>Shirley Lin</p>
              <p>Bangalore</p>

            </div>

          </div>
          
        </div>

      </div>
    );
  };
export default Sectionfour;
