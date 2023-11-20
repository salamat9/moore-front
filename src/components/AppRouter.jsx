import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    
    if(isLoading) {
        return <Loader />
    };
    
    return (
            isAuth ?
                <Routes>
                    {privateRoutes.map((route, key) =>
                        <Route element={route.component}
                               path={route.path}
                               key={key} />
                    )}
                    <Route path='*' element={<Navigate to="/main" replace />} />
                </Routes>
                :
                <Routes>
                    {publicRoutes.map((route, key) =>
                        <Route element={route.component}
                               path={route.path}
                               key={key} />
                    )}
                    <Route path='*' element={<Navigate to="/login" replace />} />
                </Routes>
    );
};

export default AppRouter;