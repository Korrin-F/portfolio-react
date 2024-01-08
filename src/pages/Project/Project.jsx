import './Project.css'
import Projects from "../../components/Projects/Projects";
import Skills from '../../components/Skills/Skills';
import React, { useEffect } from 'react';

function Project() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <>
            <Skills />
            <Projects />
        </>
    )
}

export default Project;