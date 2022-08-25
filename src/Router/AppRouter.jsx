import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from "./router.js"

const AppRouter = () => {
    return (
        <Routes> {
            publicRoutes.map(rout =>          
                <Route
                    exact={rout.exact}
                    path={rout.path}
                    element={rout.element}
                    key={rout.key}
                />
            )
        }</Routes>
    );
};

export default AppRouter;