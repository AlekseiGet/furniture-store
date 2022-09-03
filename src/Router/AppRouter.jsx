import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import MyLoader from '../components/layout/loader/MyLoader.jsx';
import { EntranceContext } from '../context/context.js';
import { publicRoutes, privateRoutes } from "./router.js"

const AppRouter = () => {
   
 
   const { isAuth, isloading } = useContext(EntranceContext);
    if (isloading) {  
        return <MyLoader />     
    }
    
    return (
        isAuth
            ? <Routes>{
                privateRoutes.map(rout =>
                    <Route
                        exact={rout.exact}
                        path={rout.path}
                        element={rout.element}
                        key={rout.key}
                    />
                )
            }</Routes>

            : <Routes> {
                publicRoutes.map(rout =>
                    <Route
                        exact={rout.exact}
                        path={rout.path}
                        element={rout.element}
                        key={rout.key}
                    />
                )
            }</Routes>

    )
};

export default AppRouter;