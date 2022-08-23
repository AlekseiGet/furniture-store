import React from 'react';
import LeftBarItem from './LeftBarItem';
import { CatalogLeft } from "./ToolBar";


const LeftBar = () => {
    return (
        <div style={CatalogLeft} className='left_bar_conteiner' >
          
             <LeftBarItem/>
            
        </div>
    );
};

export default LeftBar;