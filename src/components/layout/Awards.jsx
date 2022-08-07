import React from 'react';
import awards1 from "../../img/awards/awards1.jpg";
import awards2 from "../../img/awards/awards2.jpg"
import awards3 from "../../img/awards/awards3.jpg"
import awards4 from "../../img/awards/awards4.jpg"

const Awards = () => {
    return (
        <div className="content">
        <div className='awards'>
            <div className="awards_item">
                <img src={awards1} alt="ups" />
            </div>
            <div className="awards_item">
                <img src={awards2} alt="ups" />
            </div>
            <div className="awards_item">
                <img src={awards3} alt="ups" />
            </div>
            <div className="awards_item">
                <img src={awards4} alt="ups" />
            </div>
          </div>  
        </div>
    );
};

export default Awards;