import { ProjectCard } from "./ProjectCard";
import { Container } from "./style";

export function Projects() {
  return (
    <Container id='projects'>
      <div className="content">
        <h1>Projetos</h1>

        <div className="grid">
          <ProjectCard
            name="WorldTrip"
            description="
              A ideia desta aplicação é mostrar dados sobres os Continentes, 
              dentre esses dados quantas cidades do continente fazem partes do TOP 100
              cidades mais visitadas do mundo."
            imgFileName="worldtrip.png"
            linkProject="https://worldtrip-beta-five.vercel.app/"
            linkRepository="https://github.com/JuanSanjuanLemos/worldtrip"
            technologies="Chakra UI, Swiper, NextJS, Typescript e MirageJs"
          />
          <ProjectCard
            name="WorldTrip"
            description="
              A ideia desta aplicação é mostrar dados sobres os Continentes, 
              dentre esses dados quantas cidades do continente fazem partes do TOP 100
              cidades mais visitadas do mundo."
            imgFileName="worldtrip.png"
            linkProject="https://worldtrip-beta-five.vercel.app/"
            linkRepository="https://github.com/JuanSanjuanLemos/worldtrip"
            technologies="Chakra UI, Swiper, NextJS, Typescript e MirageJs"
          />
          <ProjectCard
            name="WorldTrip"
            description="
              A ideia desta aplicação é mostrar dados sobres os Continentes, 
              dentre esses dados quantas cidades do continente fazem partes do TOP 100
              cidades mais visitadas do mundo."
            imgFileName="worldtrip.png"
            linkProject="https://worldtrip-beta-five.vercel.app/"
            linkRepository="https://github.com/JuanSanjuanLemos/worldtrip"
            technologies="Chakra UI, Swiper, NextJS, Typescript e MirageJs"
          />
          <ProjectCard
            name="WorldTrip"
            description="
              A ideia desta aplicação é mostrar dados sobres os Continentes, 
              dentre esses dados quantas cidades do continente fazem partes do TOP 100
              cidades mais visitadas do mundo."
            imgFileName="worldtrip.png"
            linkProject="https://worldtrip-beta-five.vercel.app/"
            linkRepository="https://github.com/JuanSanjuanLemos/worldtrip"
            technologies="Chakra UI, Swiper, NextJS, Typescript e MirageJs"
          />
        </div>
      </div>
    </Container>
  );
}
