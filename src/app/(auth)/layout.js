import React from 'react';
import Navbar from '../component/shared/Navbar';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;