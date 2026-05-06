import React from 'react';
import Header from '../component/shared/Header';
import Navbar from '../component/shared/Navbar';
import BreakingNews from '../component/shared/BreakingNews';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <BreakingNews/>
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;