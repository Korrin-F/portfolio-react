import projects from '../../data/projects.json';
import PageHeader from '../SectionHeader/PageHeader';
import ProjectCard from './ProjectCard';


function Projects() {
    console.log(projects[0].image);

    return (
    //    <!-- My Project Cards-->
      <section className="container" id="work">
        {/* <!-- header --> */}
        <PageHeader name='Projects' />
          
        <div className="row justify-content-evenly ">
            <ProjectCard id={projects[0].id} title={projects[0].title} subtitle={projects[0].tech} text={projects[0].description} image={projects[0].image} link={projects[0].link} alt={projects[0].alt} />
           
          

        </div>
      </section>
    )
}

export default Projects;