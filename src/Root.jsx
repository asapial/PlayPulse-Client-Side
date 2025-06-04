import React from 'react';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';

const Root = () => {
    return (
        <div>
            <div className=' w-full md:w-11/12 mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;