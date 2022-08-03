import React from 'react';
import { useContext } from 'react';
import { FurnitureBox } from '../../../context/context';

const LeftBarItem = () => {
   
    const [] = useContext(FurnitureBox);
 
    return (
        <div className='left_bar_box'>
            {FurnitureBox._currentValue.map(bar => 
                <div className='left_bar_item' key={bar.image}>
                  <div className="left_bar_imag">
                      <img src={bar.image} alt="ups" />
                  </div>
                  <div className="left_bar_text">{bar.text}</div>
               </div>
             ) }
            
            
        </div>
    );
};

export default LeftBarItem;