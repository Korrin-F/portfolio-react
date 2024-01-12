import { NavLink } from "react-router-dom";

function ListLink(props) {
    const {filePath, text} = props;
    console.log('File path: ' + filePath)
    return (
        <li>
            <NavLink
                to={filePath}
                end
                className="nav-link"  
            >
            {text}
            </NavLink>
        </li>
    )
}

export default ListLink;