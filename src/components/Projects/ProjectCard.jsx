// import kangarooMouse from '../../assets/images/kangaroo-rat-d.33-redu.png'
import './ProjectCard.css'


function ProjectCard(props) {
    return (
        <a className="card col-11 col-sm-10 col-md-5 col-xl-4 mb-5 mx-sm-2" href={props.link} target="_blank">
            <div className="card-body card-body-work">
              <h3 className="card-title mb-2">{props.title}</h3>
              <h6 className="card-subtitle mb-3">{props.subtitle}</h6>
              <p className="card-text">{props.text}</p>
            </div>
            <img className="float-end pb-md-2 pb-xl-0" id={props.id} src={props.image}  alt={props.alt} />
        </a>
    )
}

export default ProjectCard;

