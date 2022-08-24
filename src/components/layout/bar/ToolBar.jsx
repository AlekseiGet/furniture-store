import React from 'react';
import icon from "../../../../src/img/yX3CqllsVwg.jpg"

 

const ToolBar = (props) => {
  const catalogActive = () => {
    if (props.catalogVisibil === false) {
      props.setCatalogVisibil (true)
    } else {
      props.setCatalogVisibil(false)
    }  
  };

 


    return (
        <div className="tool_bar_box">
        <div className='tool_bar'>
          <div className="bar_icon">
            <img src={icon} alt="ups" />
          </div>
          <div className="bar_tool">
                <span>+7 (938) 150-24-64</span>
            <span onClick={catalogActive}>Каталог</span>
                <span>О фабрике</span>
                <span>Акции</span>
                 <a href='#contacts'>Контакты</a>
                <span>Войти <p>Регистрация</p></span>
          </div>
        </div>
     </div>
    );
};

export default ToolBar;
//export { CatalogLeft };
