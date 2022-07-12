import React from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';

export const Layout = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <main>{children}</main>
        </>
    );
};
