import React from 'react';
import { useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const Info = () => {
    const location = useLocation();
    const { from } = location.state;
    return (
        <div>
            <Header/>          
                <div className="info_for_conteiner">
                     <div className="content">
                           <h1> {from.title}</h1>
                           <h2>{from.text} </h2>
                      </div>
                     <Footer/>
             </div>
           
        </div>
    );
};

export default Info;