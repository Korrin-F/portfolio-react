import { NavLink } from 'react-router-dom';

const styles = {
    body: {
        // border: '2px solid var(--yellow)',
        borderRadius: 10,
        // boxShadow: 'var(--box-shadow)'
        width: "auto"
    }
}

function NavCardCell(props) {
    const {title, pageLocation, description} = props;

    return (
        <div className="col-11 col-sm-10 col-md-5 col-xl-4 mb-5 mx-sm-2">
            <NavLink
                to={pageLocation}
                end
                className="nav-link"
                // style={pageStyle}
                // onMouseEnter={handleNavHover}
                // onMouseLeave={handleNavLinkMouseLeave}
                // onClick={handleClick}
            >    
                <div className="card-body card-body-work p-4 button"
                    style={styles.body}>
                    <h3 className="card-title mb-2">{title}</h3>
                    {/* <h6 className="card-subtitle mb-3">{props.subtitle}</h6> */}
                    <p className="card-text">{description}</p>
                </div>                      
            </NavLink>
        </div>
    )
}

export default NavCardCell;