import React from 'react';
import LeftBarItem from './LeftBarItem';


const LeftBar = (props) => {
    return (
        <div style={props.catalogLeft} className='left_bar_conteiner' onClick={() => props.setCatalogVisibil(false) } >
            <div >
             <LeftBarItem  />
             </div> 
       </div>
    );
};

export default LeftBar;

// onClick={(e) => e.stopPropagation() }