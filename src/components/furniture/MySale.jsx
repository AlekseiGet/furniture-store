import React from 'react';
import classes from "./MySale.module.css";
import { FurnityreBodySale } from "../../context/context";
import { useState } from 'react';

const MySale = () => {

  
    
    function choose(p) {    
             const response = document.getElementById(p); 
             response.classList.add(classes.active);           
            const res = response.getElementsByTagName('button');
            res[0].classList.add(classes.of);
            res[1].classList.remove(classes.of);        
      }
    function changedMyMind(p) {                  
            const response = document.getElementById(p); 
            response.classList.remove(classes.active);
            const res = response.getElementsByTagName('button');
            res[1].classList.add(classes.of);
            res[0].classList.remove(classes.of);       
    }  
     //нужно чтобы кнопки были только у авторизованого пользователя - задание !!

    return (
        <div>
            <div className={classes.stocks_sale} >
                
                    {FurnityreBodySale._currentValue.map( der =>   
                        <div className={classes.stocks_block} key={der.key} id={der.key} >
                       <div className={classes.stocks__item_sale}>
                            <div className={classes.stocks_sale_tatle}>{der.title} </div>
                        <div >
                                <img className={classes.stocks_sale_image} src={der.image} alt={der.alt} />
                        </div>
                        <div className={classes.stocks_sale_detail}>
                                    <button onClick={() => choose(der.key)} className={classes.stocks_sale_button} > в корзину</button>   
                                    <button onClick={() => changedMyMind(der.key)} className={[classes.stocks_sale_button, classes.of].join(' ')} > передумал</button>  
                             <br />      {der.detail.str1}
                             <br/>   {der.detail.str2}
                             <br/>   {der.detail.str3}
                        </div>
                        <div className={classes.stocks_sale_price}>
                            <s>{der.price} </s>
                        </div>
                       </div>
                     </div>

                    ) }
                
            </div>
        </div>
    );
};

export default MySale;