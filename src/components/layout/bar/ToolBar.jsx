import React from 'react';
import icon from "../../../../src/img/yX3CqllsVwg.jpg"
import { BrowserRouter, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
 

const ToolBar = (props) => {
  const [active, setActive] = useState(false);
  const [burgerClass, setBurgerClass] = useState("bar_box_tool")

  const catalogActive = () => {
    if (props.catalogVisibil) {
      props.setCatalogVisibil(false)     
    } else {
      props.setCatalogVisibil (true)
    }  
  };

  const barActive = () => {
    if (active) {
      setActive(false)
    } else {
      setActive(true)
    }
  };

  useEffect(() => {
    if (active) {
      setBurgerClass("bar_box_tool bar_box_tool_active")
    } else {
      setBurgerClass("bar_box_tool")
    }
   }, [active] )

    return (
      <div className="tool_bar_box" >
        <div className='tool_bar'>
          <div className="bar_icon">
            <Link to="/home">
              <img src={icon} alt="ups" />
            </Link>
            
           </div>
          <span className='bar_tel' >+7 (938) 150-24-64</span>
          <div onClick={barActive} className={burgerClass}>  
            <div className="bar_tool_burger"></div> 
               <div className="bar_tool">                 
                <span onClick={catalogActive}>Каталог</span>
                <Link to="/resume">О фабрике</Link>
                <Link to="/stocks">Акции</Link>
                 <a href='#contacts'>Контакты</a>
                <Link to="/entrance">Регистрация</Link>
                
            </div>
          </div> 
        </div>
     </div>
    );
};

export default ToolBar;

