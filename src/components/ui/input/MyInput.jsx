import React from 'react';
import classes from "./MyInput.module.css";


const MyInput = (props) => {
   
    return (
        <div>
            <input className={classes.myInp} {...props} />    
        </div>
    );
};

export default MyInput;