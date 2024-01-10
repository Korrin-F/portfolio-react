import PageHeader from "../SectionHeader/PageHeader";
import SkillPod from "./SkillPod";
import './Skills.css';

const skills = [
    {
        skillOne: "HTML",
        skillTwo: "CSS"
    },
    {
        skillOne: "Javascript",
        skillTwo: "Bootstrap"
    },
    {
        skillOne: "React",
        skillTwo: "Node.js"
    },
    {
        skillOne: "Python",
        skillTwo: "Matplotlib"
    },
    {
        skillOne: "Pandas",
        skillTwo: "Numpy"
    }
]  

function Skills() {

    return (

      <section className="pb-4 pt-4" id="skills">
        <section className="container">
            <PageHeader name="Skills" />
            <div className="row justify-content-evenly text-center py-md-2 pt-2">
                {skills.map((skill, index) => (
                    <SkillPod key={index} skillOne={skill.skillOne} skillTwo={skill.skillTwo} />
                ))}
            </div>
        </section>
      </section>
    )
}

export default Skills;