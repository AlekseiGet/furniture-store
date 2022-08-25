import React from 'react';
import LeftBarItem from './LeftBarItem';

//<div  >

const LeftBar = (props) => {
    return (
        <div style={props.catalogLeft} className='left_bar_conteiner' onClick={() => props.setCatalogVisibil(false) } >
            <div onClick={(e) => e.stopPropagation() }>
             <LeftBarItem  />
             </div> 
       </div>
    );
};

export default LeftBar;