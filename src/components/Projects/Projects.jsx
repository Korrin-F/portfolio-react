import projects from '../../data/projects.json';
import PageHeader from '../SectionHeader/PageHeader';
import ProjectCard from './ProjectCard';


function Projects() {

    return (
    //    <!-- My Project Cards-->
      <section className="container" id="work">
        {/* <!-- header --> */}
        <PageHeader name='Projects' />
          
        <div className="row justify-content-evenly ">
        {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        subtitle={project.tech}
                        text={project.description}
                        image={`/assets/images/${project.image}`}
                        link={project.link}
                        alt={project.alt}
                    />
                ))}
        </div>
      </section>
    )
}

export default Projects;