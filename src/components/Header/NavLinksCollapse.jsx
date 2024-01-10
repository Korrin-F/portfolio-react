import NavLinkPage from "./NavLinkPage";
import sitepages from "../../data/sitepages.json";


function NavLinksCollapse(props) {
    const {pageStyle, smallCollapseStyle, smallNavbarStyle, handleNavHover, handleNavLinkMouseLeave, handleLinkClick} = props;

    return (
        <div
          className="collapse navbar-collapse justify-content-lg-end"
          id="navbarNavAltMarkup" 
          style={smallCollapseStyle}
        >
            {/* Navlinks Container ------- */}
          <div className="navbar-nav"
                style={smallNavbarStyle}>

            {/* Navlinks ----- */}
                {sitepages.map( (page, index) => {
                    const [pageName, pagePath] = Object.entries(page)[0]; // Extract the key-value pair
                     return (
                        <NavLinkPage
                            key={index}
                            filePath={pagePath}
                            page={pageName}
                            pageStyle={pageStyle}
                            handleNavHover={handleNavHover}
                            handleNavLinkMouseLeave={handleNavLinkMouseLeave}
                            handleLinkClick={handleLinkClick}
                        />
                    )
                })}
          </div>
        </div>
    )
}

export default NavLinksCollapse;