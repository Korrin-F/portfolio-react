import './About.css';
import AboutMe from '../../components/About/AboutMe';
import KeyValues from '../../components/Values/KeyValues';
import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <>  
            <AboutMe />
            <KeyValues />
        </> 
    )
}

export default About;