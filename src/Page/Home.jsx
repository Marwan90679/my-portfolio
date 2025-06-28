import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Hero from '../Components/Header/Hero';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';


const Home = () => {
    return (
        <div>
         <Hero></Hero>
         <AboutMe></AboutMe>
         <Skills></Skills>
        </div>
    );
};

export default Home;