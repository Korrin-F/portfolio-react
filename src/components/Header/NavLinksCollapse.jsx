import NavLinkPage from "./NavLinkPage";
import sitepages from "../../data/sitepages.json";

function NavLinksCollapse(props) {
    const {pageStyle, handleNavHover, handleNavLinkMouseLeave} = props;

    return (
        <div
          className="collapse navbar-collapse justify-content-lg-end"
          id="navbarNavAltMarkup"
        >
            {/* Navlinks Container ------- */}
          <div className="navbar-nav">

            {/* Navlinks ----- */}
                {sitepages.map( (page, index) => {
                    const [pageName, pagePath] = Object.entries(page)[0]; // Extract the key-value pair
                     return (
                        <NavLinkPage
                            key={index}
                            filePath={pagePath}
                            page={pageName}
                            pageStyles={pageStyle}
                            handleNavHover={handleNavHover}
                            handleNavLinkMouseLeave={handleNavLinkMouseLeave}
                        />
                    )
                })}
          </div>
        </div>
    )
}

export default NavLinksCollapse;