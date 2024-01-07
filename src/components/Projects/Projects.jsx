import projects from '../../data/projects.json';
import PageHeader from '../SectionHeader/PageHeader';
import ProjectCard from './ProjectCard';
// import card images work around
import kangarooMouse from '../../assets/images/kangaroo-rat-d.33-redu.png';
import otter from '../../assets/images/otter-d@.33-redu.png';
import hedgehog from '../../assets/images/hedgehog1-d.25-redu.png';
import bird from '../../assets/images/bird-d@.33-redu.png';
import fox from '../../assets/images/fox-dog-d@.33-redu.png';
import mouse from '../../assets/images/mouse-d@.33-redu.png';

const animalImages = {
  "kangaroo-mouse": kangarooMouse,
  otter: otter,
  hedgehog1: hedgehog,
  bird: bird,
  "fox-dog": fox,
  mouse: mouse
};


function Projects() {

    return (
    //    <!-- My Project Cards-->
      <section className="container" id="work">

        <PageHeader name='Projects' />
          
        <div className="row justify-content-evenly ">
        {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        subtitle={project.tech}
                        text={project.description}
                        image={animalImages[project.id]}
                        link={project.link}
                        alt={project.alt}
                    />
                ))}
        </div>
      </section>
    )
}

export default Projects;