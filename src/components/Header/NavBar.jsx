import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './NavBarMedia.css';
import Logo from './Logo';
import MobileToggler from './MobileToggler';
import NavLinksCollapse from './NavLinksCollapse';
import styles from './styles';


function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia('(max-width: 992px)').matches
  );
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isProjects = location.pathname === '/projects';
  const isContact = location.pathname === '/contact';

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 992px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageStyles =
    (isHome && isSmallScreen && styles.homeSmall) ||
    (isHome && !isSmallScreen && styles.home) ||
    (isAbout && isSmallScreen && styles.aboutSmall) ||
    (isAbout && !isSmallScreen && styles.about) ||
    (isProjects && isSmallScreen && styles.projectsSmall) ||
    (isProjects && !isSmallScreen && styles.projects) ||
    (isContact && isSmallScreen && styles.contactSmall) ||
    (isContact && !isSmallScreen && styles.contact) ||
    styles.home; // Default to home styles if none match

  const handleNavHover = (event) => {
    event.target.style.color = pageStyles.hoverStyles.color;
    event.target.style.textShadow = pageStyles.hoverStyles.textShadow;
  };

  const handleNavBrandMouseLeave = (event) => {
    event.target.style.color = pageStyles.navbarBrand.color;
    event.target.style.textShadow = 'none';
  };

  const handleNavLinkMouseLeave = (event) => {
    event.target.style.color = pageStyles.navLink.color;
    event.target.style.textShadow = 'none';
  };

  const handleTogglerClick = () => {
    setIsMenuCollapsed((prev) => !prev); // Toggle the collapse status
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top nav-cont" 
         style={pageStyles.navbar}
    >
      <div className="container-fluid">
        <Logo
          pageStyle={pageStyles.navbarBrand}
          handleNavHover={handleNavHover}
          handleNavBrandMouseLeave={handleNavBrandMouseLeave}
        />
        <MobileToggler 
          navbarTogglerStyle={pageStyles.navbarToggler}
          isMenuCollapsed={isMenuCollapsed} // Pass the collapse status as a prop
          onTogglerClick={handleTogglerClick} // Pass the click handler as a prop
        />
        <NavLinksCollapse
          pageStyle={pageStyles.navLink}
          smallCollapseStyle={pageStyles.navbarCollapse}
          smallNavbarStyle={pageStyles.navbarNav}
          handleNavHover={handleNavHover}
          handleNavLinkMouseLeave={handleNavLinkMouseLeave}
        />
      </div>
    </nav>
  );
}

export default NavBar;