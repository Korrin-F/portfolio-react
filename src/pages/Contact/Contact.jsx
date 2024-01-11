import React, { useEffect } from 'react';
import ContactMe from '../../components/Contact/ContactMe'

function Contact() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <>
            <ContactMe />
        </>
    )
}

export default Contact;