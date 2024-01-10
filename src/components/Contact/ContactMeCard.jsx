import './ContactMeCard.css';

function ContactMeCard() {
    return (
        
        <div className="d-flex mb-4 mt-1 mt-md-2 mt-lg-0 mt-xxl-4 justify-content-center" id="contact">
            <div>
                <h3 className="display-6 px-3 mb-0 mx-auto">Contact Me</h3>
                <div className="row contact-content p-4 py-5 p-sm-5 ">
                    <div className="col-6 ">
                        <a className="btn button" href="https://www.linkedin.com/in/korrin-franklin/" target="_blank">
                            LinkedIn
                        </a>
                    </div>
                    <div className="col-6 ">
                        <a className="btn button" href="https://github.com/korrin-f" target="_blank">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default ContactMeCard;