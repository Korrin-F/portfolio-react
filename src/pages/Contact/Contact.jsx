import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <>
        </>
    )
}

export default Contact;