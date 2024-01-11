import contactme from '../../data/contactme.json';
import ContactButton from './ContactButton';

const styles = {
    text: {
        backgroundColor: 'var(--rose)',
        color: 'var(--dark)',
        fontFamily: 'var(--font-family-main)',
        width: 'max-content',
        position: 'relative',
        bottom: '-1.2rem',
    },
    container: {
        border: '3px solid',
        borderColor: 'var(--dark)',
        borderRadius: 10,
        width: 'max-content',
    },
    buttonText: {
        fontFamily: 'var(--font-family-secondary)',
        color: 'var(--dark)',
    }
}


function ContactMeCard(props) {
    const {backgroundColor, borderTextColor} = props;
      // Create a new styles object with updated backgroundColor
    const updatedStyles = {
        ...styles,
        text: {
            ...styles.text,
            backgroundColor: backgroundColor,
            color: borderTextColor
        },
        container: {
            ...styles.container,
            borderColor: borderTextColor,
        },
        buttonText: {
            ...styles.buttonText,
            color: borderTextColor,
        }
    };
    console.log(updatedStyles.buttonText.color);
    return (
        
        <div className="d-flex mb-4 mt-1 mt-md-2 mt-lg-0 mt-xxl-4 justify-content-center" 
             id="contact"
        >
            <div>
                <h3 
                className="display-6 px-3 mb-0 mx-auto"
                style={updatedStyles.text}
                >
                    Contact Me
                </h3>
                <div 
                className="row contact-content p-4 py-5 p-sm-5 "
                style={updatedStyles.container}
                >
                    <ContactButton 
                    link={contactme.linkedIn}
                    buttonText='LinkedIn'
                    style={updatedStyles.buttonText}
                    />
                    <ContactButton 
                    link={contactme.github}
                    buttonText='GitHub'
                    style={updatedStyles.buttonText}
                    />
                    
                </div>
            </div>
      </div>
    )
}

export default ContactMeCard;