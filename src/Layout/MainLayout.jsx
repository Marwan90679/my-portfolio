import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
       <div className='bg-black p-0 md:p-2 lg:p-3 kanit min-h-screen'>
         <div className='bg-[#FFE7D6] md:rounded-xl overflow-hidden shadow-lg'>
            <Navbar />
            <div className="min-h-[calc(100vh-120px)]"> 
                <Outlet />
            </div>
            <Footer />
        </div>
       </div>
    );
};

export default MainLayout;