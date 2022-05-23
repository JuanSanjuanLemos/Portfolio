import Image from "next/image";
import { FiLink } from "react-icons/fi";
import { Button } from "../Button";

import { Card } from "./style";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string;
  linkProject: string;
  linkRepository: string;
  urlImage: string;
}

export function ProjectCard({
  description,
  urlImage,
  linkProject,
  linkRepository,
  name,
  technologies,
}: ProjectCardProps) {
  return (
    <Card>
      <div className="project-image">
        <Image
          layout="fill"
          src={`${urlImage}`}
          alt={name}
          priority
          placeholder={"blur"}
          blurDataURL = {"/images/loader.gif"}
        />
      </div>
      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p className="technologies">{technologies}</p>
      <div className="wrapper-button">
        <Button color="blue" link={linkProject} text="Visualizar">
          {<FiLink />}
        </Button>
        <Button color="pink" link={linkRepository} text="Repositório">
          {<FiLink />}
        </Button>
      </div>
    </Card>
  );
}
