import Hero from '../../components/Home/Hero';
import NavCards from '../../components/Home/NavCards';
import React, { useEffect } from 'react';
import './Home.css';

function Home(){
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this effect runs only once when the component mounts


    return (
        <>
            <Hero />
            <NavCards />
        </>
    )
};

export default Home;