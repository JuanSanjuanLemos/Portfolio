import { Button } from "../Button";
import { Card } from "./style";

interface ProjectCardProps{
  name: string;
  description: string;
  technologies: string;
  linkProject: string;
  linkRepository: string;
  imgFileName: string;
}

export function ProjectCard({description,imgFileName,linkProject,linkRepository,name,technologies}:ProjectCardProps){
  return(
    <Card>
      <img className="project-image" src={`/images/projects/${imgFileName}`} alt={name} />
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p className="technologies">{technologies}</p>
      <div className="wrapper-button">
        <Button color="blue" imgURL="/images/link.svg" link={linkProject} text="Visualizar" />
        <Button color="pink" imgURL="/images/link.svg" link={linkRepository} text="Repositório" />
      </div>
    </Card>
  )
}