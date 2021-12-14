import React from 'react';
import styles from "./styles/interiorsectionthree.module.css";

const Sectionthree = () => {
    return(
		<div className={styles.Sectionthree}>
      <h3 className={styles.h3text}>What we offer?</h3>
     <div>   
     <div className={styles.frameblock}>
      <div className={styles.frametext}>
        <p className={styles.text1}>Living room & Bedroom</p>
        <p className={styles.text2}>We have worked in all kinds of kitchen modules and bring some of the trending designs in the market to make your kitchen get a classy and modern look.</p>
        <button type="submit" className={styles.btn2}>Get Quote<span><img src="Arrow - Right.png" alt=" "></img></span></button>
      </div>
      <div className={styles.border}>
        <img src="frame1.png" alt=" "/>
      </div>    
    </div>
    <div className={styles.frameblock}>
    <div className={styles.border1}>
        <img src="frame2.png" alt=" "/>
      </div>
      <div className={styles.frametext}>
        <p className={styles.text1}>Modular Kitchen</p>
        <p className={styles.text2}>We have worked in all kinds of kitchen modules and bring some of the trending designs in the market to make your kitchen get a classy and modern look.</p>
        <button type="submit" className={styles.btn2}>Get Quote<span><img src="Arrow - Right.png" alt=" "></img></span></button>
      </div>
    </div>
    <div className={styles.frameblock}>
      <div className={styles.frametext}>
        <p className={styles.text1}>False Ceiling & Wall</p>
        <p className={styles.text2}>We have worked in all kinds of kitchen modules and bring some of the trending designs in the market to make your kitchen get a classy and modern look.</p>
        <button type="submit" className={styles.btn2}>Get Quote<span><img src="Arrow - Right.png" alt=" "></img></span></button>
      </div>
      <div className={styles.border}>
        <img src="frame3.png" alt=" "/>
      </div>     
    </div> 
    <div>
      <h3 className={styles.h3text}>Some Recent Projects</h3>
      <div className={styles.imageblock}>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src="image1.png" alt=" "/>
            <img src="image4.png" alt=" "/>
          </div>
          <div className={styles.column}>
            <img src="image2.png" alt=" "/>
            <img src="image5.png" alt=" "/>
            <img src="image6.png" alt=" "/>
          </div>
          <div className={styles.column}>
            <img src="image3.png" alt=" "/>
            <img src="image7.png" alt=" "/>
          </div>
        </div>
      </div>
    </div> 
    </div> 
      
    </div>
    )
};
export default Sectionthree;