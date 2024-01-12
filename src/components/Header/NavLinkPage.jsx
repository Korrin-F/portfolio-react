import { NavLink } from 'react-router-dom';

function NavLinkPage(props) {
    const {pageStyle, handleNavHover, handleNavLinkMouseLeave, filePath, page, handleLinkClick } = props;
    const handleClick = (event) => {
        if (handleLinkClick) {
            handleLinkClick(); 
        }
    };
    console.log('File path: ' + filePath)
    return (
        <NavLink
            to={filePath}
            end
            className="nav-link"
            style={pageStyle}
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavLinkMouseLeave}
            onClick={handleClick}
        >
            {page}
        </NavLink>
    )
}

export default NavLinkPage;