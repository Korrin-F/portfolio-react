import './Circle.css'

const style = {
    backgroundColor: "var(--yellow)",
    borderRadius: "50%",
    width: 175,
    height: 175,
    position: "absolute",
    zindex: "1",
    top: "50%",
    left: "50%",
    boxShadow: "var(--circle-shadow",
}

function Circle(props) {

    return <div style={style} id={props.id}></div>
}

export default Circle;