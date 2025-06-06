import React, { useContext } from 'react';
import { AuthContext } from '../main';
import Loader from '../Components/Common/Loader';
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading)
    {
        return <Loader></Loader>
    }

    if(!user)
    {
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }

    return ({children});
};

export default ProtectedRoute;