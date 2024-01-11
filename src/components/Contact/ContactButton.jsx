function ContactButton(props) {
    const {link, buttonText, style} = props;

    return (
        <div className="col-6 m-auto">
            <a 
            className="btn button" 
            href={link} 
            target="_blank"
            style={style}
            >
                {buttonText}
            </a>
        </div>
    )
}

export default ContactButton;