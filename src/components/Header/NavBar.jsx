import { NavLink, useLocation } from 'react-router-dom';
import './NavBarMedia.css';

const textLogo = "{K:F}";

const styles = {
    home: {
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
    },
    about: {
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
    },
    projects: {
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
    },
    contact: {
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
    }
  
};

function NavBar(props) {
    // variable to manage what page is active to then adjust the styling of that navbar 
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isProjects = location.pathname === '/projects';
  const isContact = location.pathname === '/contact';

  const handleNavHover = (event) => {
    const pageStyles = 
        isHome
        ? styles.home
        : isAbout
        ? styles.about
        : isProjects
        ? styles.projects
        : isContact
        ? styles.contact
        : styles.home;

    event.target.style.color = pageStyles.hoverStyles.color;
    event.target.style.textShadow = pageStyles.hoverStyles.textShadow;
  };

    const handleNavBrandMouseLeave = (event) => {
        const pageStyles = isHome
                ? styles.home
                : isAbout
                ? styles.about
                : isProjects
                ? styles.projects
                : isContact
                ? styles.contact
                : styles.home;

        event.target.style.color = pageStyles.navbarBrand.color;
        event.target.style.textShadow = "none"
    };

    const handleNavLinkMouseLeave = (event) => {
        const pageStyles = isHome
                ? styles.home
                : isAbout
                ? styles.about
                : isProjects
                ? styles.projects
                : isContact
                ? styles.contact
                : styles.home;

        event.target.style.color = pageStyles.navbarBrand.color;
        event.target.style.textShadow = "none"
    }
    
    

  return (
    <nav className="navbar navbar-expand-lg fixed-top nav-cont" 
        style={ 
            isHome ? styles.home.navbar :
            isAbout ? styles.about.navbar :
            isProjects ? styles.projects.navbar : 
            isContact ? styles.contact.navbar : styles.home.navbar
        } 
        id={props.page}>
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-content-center"
          href="#top"
          style={ 
            isHome ? styles.home.navbarBrand :
            isAbout ? styles.about.navbarBrand :
            isProjects ? styles.projects.navbarBrand : 
            isContact ? styles.contact.navbarBrand : styles.home.navbarBrand
        }
          onMouseEnter={handleNavHover}
          onMouseLeave={handleNavBrandMouseLeave}
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
              style={ 
                isHome ? styles.home.navLink :
                isAbout ? styles.about.navLink :
                isProjects ? styles.projects.navLink : 
                isContact ? styles.contact.navLink : styles.home.navLink
              }
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLinkMouseLeave}
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              end
              className="nav-link"
              style={ 
                isHome ? styles.home.navLink :
                isAbout ? styles.about.navLink :
                isProjects ? styles.projects.navLink : 
                isContact ? styles.contact.navLink : styles.home.navLink
              }
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLinkMouseLeave}
            >
              About
            </NavLink>
            <NavLink
              to="projects"
              end
              className="nav-link"
              style={ 
                isHome ? styles.home.navLink :
                isAbout ? styles.about.navLink :
                isProjects ? styles.projects.navLink : 
                isContact ? styles.contact.navLink : styles.home.navLink
              }
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLinkMouseLeave}
            >
              Projects
            </NavLink>
            <NavLink
              to="contact"
              end
              className="nav-link"
              id="contact"
              style={ 
                isHome ? styles.home.navLink :
                isAbout ? styles.about.navLink :
                isProjects ? styles.projects.navLink : 
                isContact ? styles.contact.navLink : styles.home.navLink
              }
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLinkMouseLeave}
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