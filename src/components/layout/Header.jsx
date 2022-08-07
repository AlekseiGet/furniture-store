import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import LeftBar from './bar/LeftBar';
import ToolBar from './bar/ToolBar';

const Header = () => {
    let [visibl, setVisibl] = useState("header_background ");
    const opacity = useRef();
    const observer = useRef();

    useEffect(() => {
        var callback = function(entries,observer){
          if (entries[0].isIntersecting) {
              setVisibl("header_background  start" );

          }
        };
            observer.current = new IntersectionObserver(callback);
            observer.current.observe(opacity.current )
    } )
  
    return (
        <div>
            <header>
                <ToolBar/>
                <LeftBar/>
                <div ref={opacity}  className={visibl}>                  
                </div>
            </header>  
        </div>
    );
};

export default Header;