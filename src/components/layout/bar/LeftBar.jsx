import React from 'react';
import LeftBarItem from './LeftBarItem';



const LeftBar = (props) => {
    return (
        <div style={props.catalogLeft} className='left_bar_conteiner' >
          
             <LeftBarItem/>
            
        </div>
    );
};

export default LeftBar;