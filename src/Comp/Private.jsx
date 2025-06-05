import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from './Provider';

const Private = ({children}) => {
    const {user} = useContext(AuthProvider);
    if(user && user?.token){
        return children;
    }
        
    return <Navigate to='/login'></Navigate>
};

export default Private;