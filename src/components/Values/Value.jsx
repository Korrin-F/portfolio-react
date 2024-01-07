import Circle from "./Circle";
import './Value.css'


function Value(props) {
    return (
        <div className="value col-10 col-sm-7 col-lg-4 py-4 px-2">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>               
                <p className="card-text">{props.text}</p>                 
                <Circle id={props.id} />
            </div>     
        </div>
    )
}

export default Value;