import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Error from '../Pages/Error/Error';

const Roots = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;