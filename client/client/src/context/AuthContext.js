import React, { createContext, useState } from 'react';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        // Perform login logic
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Perform logout logic
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
