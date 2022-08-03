import React from 'react';
import { useContext } from 'react';
import { FurnityreBodyIcon } from '../../context/context';

const Body = () => {
    const [] = useContext(FurnityreBodyIcon)
    return (
        <div className="content">
           <div className='body_furniture_item'>
            {FurnityreBodyIcon._currentValue.map( der =>
                <div key={der.image} className="furniture_item">
                    <img src={der.image} alt="ups" />
                    <div className="furniture_item_title">{der.text}</div>
                    <div className="furniture_item_price">от-{der.price} </div>
                </div>
            ) }     
           </div>
        </div>
    );
};

export default Body;