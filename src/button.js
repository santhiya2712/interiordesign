import React from "react";
import styles from "./styles/button.module.css";

function Button({ className, ...props }) {
    return (
      <div>
        <button
         
          type="button"
          className={styles.primarybtn}
          
          {...props}
        >
          {props?.label}
        </button>
      </div>
    );
  }
  
  export default Button;