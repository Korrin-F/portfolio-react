import './SkillPod.css';

function SkillPod(props) {
    return (
        <div className="col-8 p-0 col-md-3 col-lg-2 mx-md-2 ">
            <ul className="list-unstyled py-2 py-lg-3">
                <li>{props.skillOne}</li>
                <li>{props.skillTwo}</li>
            </ul>
        </div>
    )
}

export default SkillPod;