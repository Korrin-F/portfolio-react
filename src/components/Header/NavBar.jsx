import { NavLink } from 'react-router-dom';
import './NavBar.css';

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
                    <NavLink
                        to="/"
                        end
                        className="nav-link"
                    >
                    Home
                    </NavLink>
                    <NavLink
                        to="about"
                        end
                        className="nav-link"
                    >
                    About
                    </NavLink>
                    <NavLink
                        to="projects"
                        end
                        className="nav-link"
                    >
                    Projects
                    </NavLink>
                    <NavLink
                        to="contact"
                        end
                        className="nav-link"
                    >
                    Contact
                    </NavLink>
                    </div>
                </div>
            </div>
        </nav>  
        
    )
}

export default NavBar;