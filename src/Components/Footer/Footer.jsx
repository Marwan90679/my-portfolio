import React from 'react';
import Logo from '../Logo';

const Footer = () => {
    return (
        <div className='border-t py-10 lg:border-t-4 flex flex-col items-center justify-center text-center'>
            <h4 className='font-rubik text-stone-800 font-bold text-2xl lg:text-5xl lg:py-6 py-2'>Thanks for visiting my site</h4>
           <div>
            <Logo />
           </div>
        </div>
    );
};

export default Footer;