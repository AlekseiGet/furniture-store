import React from 'react';
import icon from "../../../../src/img/yX3CqllsVwg.jpg"

const ToolBar = () => {
    return (
        <div className="tool_bar_box">
        <div className='tool_bar'>
          <div className="bar_icon">
            <img src={icon} alt="ups" />
          </div>
          <div className="bar_tool">
                <span>+7 (938) 150-24-64</span>
                <span>Каталог</span>
                <span>О фабрике</span>
                <span>Акции</span>
                <span>Контакты</span>
                <span>Войти <p>Регистрация</p></span>
          </div>
        </div>
     </div>
    );
};

export default ToolBar;