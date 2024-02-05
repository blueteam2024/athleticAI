import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const GuardedRoute = ({ path, element }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default GuardedRoute;
