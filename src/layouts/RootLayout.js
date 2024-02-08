// src/layouts/RouteLayout.js

import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path
import Header from '../components/Header'; // Adjust the path
import Footer from '../components/Footer'; // Adjust the path
import { Outlet } from 'react-router-dom';



const RootLayout = ({}) => {
    return (
        <div className='overflow-x-hidden'>
            <div ><Header/></div>
            <div><Navbar /></div>
            <div><Outlet /></div>
            <Footer  />
        </div>
    );
}

export default RootLayout;
