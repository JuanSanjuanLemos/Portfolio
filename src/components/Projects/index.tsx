import { ProjectCard } from "./ProjectCard";
import { Container } from "./style";

interface ProjectsProps{
  projects:{
    uid: string;
    title: string;
    description: string;
    technologies: string;
    urlImage: string;
    urlWebSite: string;
    urlRepository: string;
  }[]
}

export function Projects({projects}:ProjectsProps) {
  return (
    <Container id="projects" className="container">
      <div className="content">
        <h1>Projetos</h1>

        <div className="grid">
          {projects && projects.map(project=>{
            return(
              <ProjectCard key={project.uid} name={project.title} description={project.description} urlImage={project.urlImage} linkProject={project.urlWebSite} linkRepository={project.urlRepository} technologies={project.technologies} />
            )
          })}
          
        </div>
      </div>
    </Container>
  );
}
