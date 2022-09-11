import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { FurnityreBodyIcon } from '../../context/context';
import { EntranceContext } from '../../context/context';
import { BrowserRouter, Link } from "react-router-dom";

const Body = () => {
    const [] = useContext(FurnityreBodyIcon);
    const { choiceFurniture, setChoiceFurniture } = useContext(EntranceContext);
    
    let [visibl, setVisibl] = useState("furniture_item");
    const opacity = useRef();
    const observer = useRef();
    useEffect(() => {
        var callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                setVisibl("furniture_item start");
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(opacity.current)
    })
   
    return (
        <div className="content">
            <div ref={opacity} className="body_furniture_item">
              
            {FurnityreBodyIcon._currentValue.map( der =>
                <Link to="/catalog" key={der.image}> 
                    <div onClick={() => setChoiceFurniture(der.id)} className={visibl}>
                        <img src={der.image} alt="ups" />
                        <div className="furniture_item_title">{der.text}</div>
                        <div className="furniture_item_price">от-{der.price} </div>
                    </div>
                </Link>
            ) } 
               
           </div>
        </div>
    );
};

export default Body;