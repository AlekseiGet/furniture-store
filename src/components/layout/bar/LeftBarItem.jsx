import React from 'react';
import { useContext } from 'react';
import { FurnitureBox } from '../../../context/context';
import { BrowserRouter, Link } from "react-router-dom";
import { EntranceContext } from '../../../context/context';

const LeftBarItem = () => {
    const {choiceFurniture, setChoiceFurniture} = useContext(EntranceContext);
    const [] = useContext(FurnitureBox);
 
    return (
        <div id="catalog" className='left_bar_box'>
            {FurnitureBox._currentValue.map(bar => 
                <Link to="/catalog" key={bar.id}>
                    <div onClick={() => setChoiceFurniture(bar.id) } className='left_bar_item' >
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