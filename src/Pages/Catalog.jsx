import React, { useContext } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import classes from "./Catalog.module.css"
import { FurnityreItem } from '../context/context';
import { EntranceContext } from '../context/context';

const Catalog = () => {
    const isAuth = useContext(FurnityreItem );
    const { choiceFurniture } = useContext(EntranceContext);

    let result = isAuth.filter(function (item, index, array) {
        return item.title === choiceFurniture;  })
       


    return (
        <div>
            <Header />


            <div className = {classes.catalog_conteiner}>             
                <div className = {classes.catalog_box}>                  
                    {result.map(der =>
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
              <Footer />    
            </div>            
                     
        </div>
    );
};

export default Catalog;