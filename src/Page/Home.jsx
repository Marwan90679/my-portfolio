import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Hero from '../Components/Header/Hero';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';



const Home = () => {
 
    return (
        <div>
         <Hero></Hero>
         <AboutMe></AboutMe>
         <Skills ></Skills>
         <Projects></Projects>
         <Contact></Contact>
        </div>
    );
};

export default Home;