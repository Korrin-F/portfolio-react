// import { NavLink } from 'react-router-dom';
// import './NavBar.css';

// function NavBar() {
//     const textLogo = "{K:F}";
    
//     return (
       
//         <nav className="navbar navbar-expand-lg fixed-top  nav-cont">
//             <div className="container-fluid ">
//                 <a className="navbar-brand d-flex align-content-center " href="#top">
//                     <h3 className="my-0">{textLogo}</h3>
//                 </a>
//                 <button className="navbar-toggler me-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNavAltMarkup">
//                     <div className="navbar-nav">
//                     <NavLink
//                         to="/"
//                         end
//                         className="nav-link"
//                     >
//                     Home
//                     </NavLink>
//                     <NavLink
//                         to="about"
//                         end
//                         className="nav-link"
//                     >
//                     About
//                     </NavLink>
//                     <NavLink
//                         to="projects"
//                         end
//                         className="nav-link"
//                     >
//                     Projects
//                     </NavLink>
//                     <NavLink
//                         to="contact"
//                         end
//                         className="nav-link"
//                     >
//                     Contact
//                     </NavLink>
//                     </div>
//                 </div>
//             </div>
//         </nav>  
        
//     )
// }

import { NavLink } from 'react-router-dom';
import './NavBarMedia.css';

const textLogo = "{K:F}";

const styles = {
  navbar: {
    fontStyle: 'normal',
    color: 'var(--dark)',
  },
  navbarBrand: {
    fontFamily: 'var(--font-family-code)',
    fontWeight: 800,
    color: 'var(--dark)',
    transition: 'var(--transition-text-shadow)',
  },
  navLink: {
    fontFamily: 'var(--font-family-secondary)',
    fontWeight: 600,
    color: 'var(--dark)',
    transition: 'var(--transition-text-shadow)',
  },
  hoverStyles: {
    color: 'var(--yellow)',
    textShadow: 'var(--text-shadow-yellow)',
  }
};

function NavBar() {
  const handleNavLinkHover = (event) => {
    event.target.style.color = styles.hoverStyles.color;
    event.target.style.textShadow = styles.hoverStyles.textShadow;
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top nav-cont" style={styles.navbar}>
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-content-center"
          href="#top"
          style={styles.navbarBrand}
          onMouseEnter={handleNavLinkHover}
          onMouseLeave={(event) => {
            event.target.style.color = styles.navbarBrand.color;
            event.target.style.textShadow = styles.navbarBrand.textShadow;
          }}
        >
          <h3 className="my-0">{textLogo}</h3>
        </a>
        <button
          className="navbar-toggler me-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              to="/"
              end
              className="nav-link"
              style={styles.navLink}
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={(event) => {
                event.target.style.color = styles.navLink.color;
                event.target.style.textShadow = styles.navLink.textShadow;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              end
              className="nav-link"
              style={styles.navLink}
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={(event) => {
                event.target.style.color = styles.navLink.color;
                event.target.style.textShadow = styles.navLink.textShadow;
              }}
            >
              About
            </NavLink>
            <NavLink
              to="projects"
              end
              className="nav-link"
              style={styles.navLink}
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={(event) => {
                event.target.style.color = styles.navLink.color;
                event.target.style.textShadow = styles.navLink.textShadow;
              }}
            >
              Projects
            </NavLink>
            <NavLink
              to="contact"
              end
              className="nav-link"
              id="contact"
              style={styles.navLink}
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={(event) => {
                event.target.style.color = styles.navLink.color;
                event.target.style.textShadow = styles.navLink.textShadow;
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;