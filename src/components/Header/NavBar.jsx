import './navbar.css';

function NavBar() {
    const textLogo = "{K:F}";
    return (
       
        <nav className="navbar navbar-expand-lg fixed-top  nav-cont">
            <div className="container-fluid ">
                <a className="navbar-brand d-flex align-content-center " href="#top">
                    <h3 className="my-0">{textLogo}</h3>
                </a>
                <button className="navbar-toggler me-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="#about">About Me</a>
                    <a className="nav-link" href="#work">Work</a>
                    <a className="nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>  
        
    )
}

export default NavBar;