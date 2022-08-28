import React from 'react';
import Footer from '../components/layout/Footer';
import classes from './Error.module.css';
import Header from '../components/layout/Header';
import ErrorPage from "../img/error/errorPage.jpg"

const Error = () => {
    return (
        <div>
            <Header />  
            <img className={classes.error_page} src={ErrorPage} alt="Error" />
            <Footer />
        </div>
    );
};

export default Error;