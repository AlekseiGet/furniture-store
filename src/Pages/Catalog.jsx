import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import classes from "./Catalog.module.css"
import { FurnityreItem } from '../context/context';
import { useContext } from 'react';

const Catalog = () => {
    const isAuth = useContext(FurnityreItem );
   
    return (
        <div>
            <Header />
            <div className = {classes.catalog_conteiner}>             
                <div className = {classes.catalog_box}>                  
                    {isAuth.map(der =>
                      <div className = {classes.catalog_item} key={der.id}>
                        <div className = {classes.catalog_item_title}>
                            <h3>{der.title}</h3>  
                        </div>
                        <div className = {classes.catalog_item_image}>
                            <img src={der.image} alt={der.title} />
                        </div>
                        <div className = {classes.catalog_item_text}>
                            {der.text}
                        </div>
                        <div className = {classes.catalog_item_price}>
                            {der.price}
                        </div>
                    </div>
            )} 

                </div>
            </div>            
            <Footer />           
        </div>
    );
};

export default Catalog;