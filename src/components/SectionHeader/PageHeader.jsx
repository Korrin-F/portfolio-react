import './PageHeader.css';

function PageHeader(props) {
    const {name, backgroundColor} = props;
    
    return (
        <div className="row section-header mx-2 mx-sm-3 mx-m-4 ">
            <h2 className="display-3 mb-0" style={backgroundColor}>{name}</h2>
        </div>
    )
}

export default PageHeader;