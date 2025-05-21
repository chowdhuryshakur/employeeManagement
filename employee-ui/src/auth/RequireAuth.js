import React from 'react';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const RequireAuth = ({ children }) => {

    const location = useLocation()
    const {userInfo} = useAppContext();

    
    
    return (
        children
    );
};

export default RequireAuth;