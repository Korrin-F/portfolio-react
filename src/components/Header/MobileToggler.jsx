function MobileToggler(props) {
    return (
        <button
          className="navbar-toggler me-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!props.isMenuCollapsed} // Invert the collapse status
          aria-label="Toggle navigation"
          style={props.navbarTogglerStyle}
          onClick={props.onTogglerClick} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    )
}

export default MobileToggler;