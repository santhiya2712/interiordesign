import React from 'react';
import styles from "./styles/interior.module.css";

const Sectionone = () =>{
	return(
		<div className={styles.Sectionone}>
		<div className={styles.header}>
			<div className={styles.logo}>
        <img src="./logo.png" alt=" " />
			</div>
      <div className={styles.navbar}>
				<ul>
					<li>Service</li>
					<li>Products</li>
					<li>Work</li>
				</ul>
				<button type="submit" className={styles.btn1}>GET QUOTE</button>
			</div>

		</div>
		<div className={styles.container}>
			<div className={styles.title}>
			<p>Interior Design & Decors</p>
			</div>
			<button type="submit" className={styles.btn2}>Book Free Consultaian<span><img src="Arrow - Right.png" alt=" "></img></span></button>
				</div>
	</div>
	);
 
	};
  
export default Sectionone;