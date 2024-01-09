import { useLocation } from 'react-router-dom';
import './NavBarMedia.css';
import Logo from './Logo';
import MobileToggler from './MobileToggler';
import NavLinksCollapse from './NavLinksCollapse';
import styles from './styles';


function NavBar() {
    // variable to manage what page is active to then adjust the styling of that navbar 
    const isSmallScreen = window.matchMedia('(max-width: 992px)').matches;
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const isProjects = location.pathname === '/projects';
    const isContact = location.pathname === '/contact';
    const pageStyles = 
          isHome && isSmallScreen ? styles.homeSmall
        : isHome && !isSmallScreen ? styles.home
        : isAbout && isSmallScreen ? styles.aboutSmall
        : isAbout && !isSmallScreen ? styles.about
        : isProjects && isSmallScreen ? styles.projectsSmall
        : isProjects && !isSmallScreen ? styles.projects
        : isContact && isSmallScreen ? styles.contactSmall
        : isContact && !isSmallScreen ? styles.contact
        : styles.home;
    console.log('Page Styles: ' + JSON.stringify(pageStyles))
    const handleNavHover = (event) => {
        event.target.style.color = pageStyles.hoverStyles.color;
        event.target.style.textShadow = pageStyles.hoverStyles.textShadow;
    };
    const handleNavBrandMouseLeave = (event) => {
        event.target.style.color = pageStyles.navbarBrand.color;
        event.target.style.textShadow = "none"
    };
    const handleNavLinkMouseLeave = (event) => {
        event.target.style.color = pageStyles.navLink.color;
        event.target.style.textShadow = "none"
    }
    
  return (
    // Container MAIN --------
    <nav className="navbar navbar-expand-lg fixed-top nav-cont" 
        style={pageStyles.navbar} 
    >
    {/* Container Sub-MAIN ----------- */}
      <div className="container-fluid">
        {/* Brand Link --------- */}
        <Logo 
            pageStyle={pageStyles.navbarBrand}
            handleNavHover={handleNavHover}
            handleNavBrandMouseLeave={handleNavBrandMouseLeave}
        />
        {/* Small Screen Nav Button --------- */}
        <MobileToggler />
        {/* Collapsable Navbar Row ----- */}
        <NavLinksCollapse 
            pageStyle={pageStyles.navLink}
            handleNavHover={handleNavHover}
            handleNavLinkMouseLeave={handleNavLinkMouseLeave}
        />
      </div>
    </nav>
  );
}


export default NavBar;