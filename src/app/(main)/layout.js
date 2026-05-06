import React from 'react';
import Header from '../component/shared/Header';
import Navbar from '../component/shared/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;