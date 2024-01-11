import Circle from "./Circle";
import './Value.css'

const styles = {
    p: {
        fontFamily: 'var(--font-family-secondary)',
        color: 'var(--dark)'
    }
}
function Value(props) {
    const {title, text, id, key} = props;

    return (
        <div className="value col-10 col-sm-7 col-lg-4 py-4 px-2" key={key}>
            <div className="card-body">
                <h5 
                className="card-title"
                >
                    {title}
                </h5>               
                <p 
                className="card-text"
                style={styles.p}
                >
                    {text}
                </p>                 
                <Circle id={id} />
            </div>     
        </div>
    )
}

export default Value;