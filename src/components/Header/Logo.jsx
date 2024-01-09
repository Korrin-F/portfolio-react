
function Logo(props) {
    const textLogo = "{K:F}";
    const {pageStyle, handleNavHover, handleNavBrandMouseLeave} = props;
    console.log("Logo Styles: " + JSON.stringify(pageStyle));
    return (
        <a
            className="navbar-brand d-flex align-content-center"
            href="#top"
            style={pageStyle} 
            onMouseEnter={handleNavHover}
            onMouseLeave={handleNavBrandMouseLeave}
        >
            <h3 className="my-0">{textLogo}</h3>
        </a>
    )
}

export default Logo;