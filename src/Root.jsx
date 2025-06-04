import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './Components/Common/NavBar';
import Footer from './Components/Common/Footer';


const Root = () => {
    return (
        <div >
            <NavBar></NavBar>
            <div className=' w-full md:w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default Root;