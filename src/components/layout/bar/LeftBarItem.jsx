import React from 'react';
import { useContext } from 'react';
import { FurnitureBox } from '../../../context/context';
import { BrowserRouter, Link } from "react-router-dom";

const LeftBarItem = () => {
   
    const [] = useContext(FurnitureBox);
 
    return (
        <div id="catalog" className='left_bar_box'>
            {FurnitureBox._currentValue.map(bar => 
                <Link to="/catalog" key={bar.image}>
                   <div className='left_bar_item' key={bar.image}>
                     <div className="left_bar_imag">
                         <img src={bar.image} alt="ups" />
                     </div>
                     <div className="left_bar_text">{bar.text}</div>
                  </div>
                </Link>
             ) }
            
            
        </div>
    );
};

export default LeftBarItem;