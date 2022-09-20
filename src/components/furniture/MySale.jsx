import React from 'react';
import classes from "./MySale.module.css";
import { FurnityreBodySale } from "../../context/context";
import { useState } from 'react';
import { BasketUser } from '../../context/context';
import { useContext } from 'react';
import { useEffect } from 'react';
import DublButton from '../ui/button/DublButton';

const MySale = () => {
    const basket = useContext(BasketUser);
    const isAuth = useContext(FurnityreBodySale);
    
    return (
        <div>
            <div className={classes.stocks_sale} >
                
                    {FurnityreBodySale._currentValue.map( der =>   
                        <div className={classes.stocks_block} key={der.key} id={der.id} >
                            <div className={classes.stocks__item_sale}>
                            <div className={classes.stocks_sale_tatle}>{der.title} </div>
                            <div >
                                <img className={classes.stocks_sale_image} src={der.image} alt={der.alt} />
                             </div>
                              <div className={classes.stocks_sale_detail}>
                                    <DublButton num={der.id} cont={isAuth} />
                             <br />  {der.detail.str1}
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