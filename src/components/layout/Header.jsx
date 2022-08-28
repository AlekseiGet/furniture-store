import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Banner from './banner/Banner';
import LeftBar from './bar/LeftBar';
import ToolBar from './bar/ToolBar';

const Header = () => {
    const [CatalogLeft, setCatalogLeft] = useState({});
    const [catalogVisibil, setCatalogVisibil] = useState(false);
   

    useEffect(() => {
       if (catalogVisibil) {
            setCatalogLeft({            
                transform: 'translateX(250px)',
                background: 'rgba(255, 0, 0, 0.699)'
            }) 
        } else {
             setCatalogLeft({            
            })
        }
    }, [catalogVisibil])
    return (
        <div >
            <header >
                <ToolBar catalogVisibil={catalogVisibil} setCatalogVisibil={setCatalogVisibil}/>
                <LeftBar catalogLeft={CatalogLeft} catalogVisibil={catalogVisibil} setCatalogVisibil={setCatalogVisibil} />
            </header>  
        </div>
    );
};

export default Header;