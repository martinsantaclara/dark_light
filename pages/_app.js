import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <Navbar />
            <Component {...pageProps} />
        </StateContext>
    );
}
export default MyApp;
