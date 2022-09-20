import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { useContext } from 'react';
import classes from "./Basket.module.css";
import { BasketUser } from '../context/context';
import Nothing from '../components/layout/nothing/Nothing';

//как то сделать чтобы при перезагрузке не обнулялась корзина

const Basket = () => {
    const basket = useContext(BasketUser);
    return (
        <div>
            <Header/>
            <div className= {classes.basket_content}>
                <h1> Здесь всё что вам понравилось !
                </h1>
                
                {basket.length < 1
                    ? <div className={classes.basket_box}>
                        <Nothing/>
                    </div>

                    :<div className={classes.basket_box}>
                    {basket.map(p => 
                        <div className={classes.basket_item} key={p.id}>
                            <div className={classes.basket_image}>
                                <img className={classes.stocks_sale_image} src={p.image} alt={p.alt} />
                             </div>
                            <div className={classes.basket_title}>{p.title} </div>
                            <div className={classes.basket_text}>
                                <br />   {p.detail.str1}
                                <br />   {p.detail.str2}
                                <br />   {p.detail.str3}
                              </div>  
                            <div className={classes.basket_price}>
                                <s>{p.price} </s>
                            </div>
                       </div>
                    )
                    }
                   </div>
                }
              <Footer/>  
            </div>     
        </div>
    );
};

export default Basket;