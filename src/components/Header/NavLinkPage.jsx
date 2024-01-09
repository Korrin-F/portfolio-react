import { NavLink } from 'react-router-dom';

function NavLinkPage(props) {
    const {pageStyle, handleNavHover, handleNavLinkMouseLeave, filePath, page } = props;
    console.log(pageStyle);
    return (
        <NavLink
            to={filePath}
            end
            className="nav-link"
            style={pageStyle}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLinkMouseLeave}
        >
            {page}
        </NavLink>
    )
}

export default NavLinkPage;