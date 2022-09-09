import React from 'react';
import icon from "../../../../src/img/yX3CqllsVwg.jpg"
import { EntranceContext } from '../../../context/context';
import { BrowserRouter, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useMemo } from 'react';
 

const ToolBar = (props) => {
  const {burgerClass, setBurgerClass} = useContext(EntranceContext);
 

  useMemo(() => {
    if (burgerClass === "bar_box_tool bar_box_tool_active") {
      setBurgerClass("bar_box_tool bar_tool_closed");
    } else {
      setBurgerClass("bar_box_tool");
    }
  }, [])

  const barActive = () => {
    if (burgerClass === "bar_box_tool bar_box_tool_active") {
      setBurgerClass("bar_box_tool bar_tool_closed");
    } else {
      setBurgerClass("bar_box_tool bar_box_tool_active");
    }
  };

  const catalogActive = () => {
    if (props.catalogVisibil) {
      props.setCatalogVisibil(false) ;    
    } else {
      props.setCatalogVisibil (true);
    }  
  };

    return (
      <div className="tool_bar_box" >
        <div className='tool_bar'>
          <div className="bar_icon">
            <Link to="/home">
              <img src={icon} alt="ups" />
            </Link>
            
           </div>
          <span className='bar_tel' >+7 (938) 150-24-64</span>
          <div  className={burgerClass}>  
               <div onClick={barActive}  className="bar_tool_burger"></div> 
               <div className="bar_tool">                 
                <span onClick={catalogActive}>Каталог</span>
                <Link to="/resume">О фабрике</Link>
                <Link to="/stocks">Акции</Link>
                 <a href='#contacts'>Контакты</a>
                <Link  to="/entrance">Регистрация</Link>
                
            </div>
          </div> 
        </div>
     </div>
    );
};

export default ToolBar;

