import './PageHeader.css';

function PageHeader(props) {
    const headerName = props.name;
    return (
        <div className="row section-header mx-2 mx-sm-3 mx-m-4 ">
            <h2 className="display-3 mb-0 ">{headerName}</h2>
        </div>
    )
}

export default PageHeader;