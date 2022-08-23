import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Banner from './banner/Banner';
import LeftBar from './bar/LeftBar';
import ToolBar from './bar/ToolBar';

const Header = () => {
   
  
    return (
        <div>
            <header>
                <ToolBar/>
                <LeftBar/>
                <div  className="header_background">   
                 <Banner/>              
                </div>
            </header>  
        </div>
    );
};

export default Header;