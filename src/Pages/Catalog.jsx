import React, { useContext } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import classes from "./Catalog.module.css"
import { FurnityreItem } from '../context/context';
import { EntranceContext } from '../context/context';
import { useState } from 'react';
import Nothing from '../components/layout/nothing/Nothing';

const Catalog = () => {
    const isAuth = useContext(FurnityreItem );
    const { choiceFurniture } = useContext(EntranceContext);
    const [close, setCliose ] = useState(false);

   const visibel = (p) => {
       setCliose(!close);
        const response = document.getElementById(p);
       if (close === true) {
           response.classList.add(classes.active);
       } else {
           response.classList.remove(classes.active);                 
       }      
    }

    let result = isAuth.filter(function (item, index, array) {
        return item.title === choiceFurniture });
    return (
        <div >
            <Header />        
            {result.length < 1
                ? <div className={classes.catalog_conteiner}>
                    <Nothing/>
                    <Footer /> 
                 </div>
              
                
                : <div className = {classes.catalog_conteiner}>             
                    <div className = {classes.catalog_box}>                  
                      {result.map(der =>
                        <div className={classes.catalog_content} onClick={() => visibel(der.id)} id={der.id} key={der.id}>
                            <div className={classes.catalog_item}  >
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
                 </div>
            )} 
                    </div> 
                     <Footer />                 
                  </div>                          
             }                      
        </div>
    );
};

export default Catalog;