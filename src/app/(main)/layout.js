import React from 'react';
import Header from '../component/shared/Header';
import Navbar from '../component/shared/Navbar';
import BreakingNews from '../component/shared/BreakingNews';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <BreakingNews/>
            <Navbar />
            {children}
            <ToastContainer />

        </div>
    );
};

export default MainLayout;