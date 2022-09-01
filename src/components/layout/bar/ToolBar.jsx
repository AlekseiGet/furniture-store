import React from 'react';
import icon from "../../../../src/img/yX3CqllsVwg.jpg"
import { BrowserRouter, Link } from "react-router-dom";
 

const ToolBar = (props) => {
  const catalogActive = () => {
    if (props.catalogVisibil) {
      props.setCatalogVisibil(false)     
    } else {
      props.setCatalogVisibil (true)
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
          <div className="bar_tool">
               
                <span onClick={catalogActive}>Каталог</span>
                <Link to="/resume">О фабрике</Link>
                <Link to="/stocks">Акции</Link>
                 <a href='#contacts'>Контакты</a>
                <Link to="/entrance">Регистрация</Link>
                
          </div>
        </div>
     </div>
    );
};

export default ToolBar;

