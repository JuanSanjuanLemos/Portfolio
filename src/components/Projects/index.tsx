import { ProjectCard } from "./ProjectCard";
import { Container } from "./style";

export function Projects() {
  return (
    <Container id="projects">
      <div className="content">
        <h1>Projetos</h1>

        <div className="grid">
          <ProjectCard
            name="WorldTrip"
            description="
              A ideia desta aplicação é mostrar dados sobres os Continentes, 
              dentre esses dados quantas cidades do continente fazem partes do TOP 100
              cidades mais visitadas do mundo."
            imgFileName="worldtrip.gif"
            linkProject="https://worldtrip-beta-five.vercel.app/"
            linkRepository="https://github.com/JuanSanjuanLemos/worldtrip"
            technologies="Chakra UI, Swiper, NextJS, Typescript e MirageJs"
          />
          <ProjectCard
            name="RocketNFTs"
            description="
              Está aplicação é uma simulação de mercado digital para NFTs. O projeto tem como foco o design responsivo "
            imgFileName="rocketnfts.gif"
            linkProject="https://juansanjuanlemos.github.io/RocketNFTs/"
            linkRepository="https://github.com/JuanSanjuanLemos/RocketNFTs"
            technologies="HTML, CSS, SASS Javascript"
          />
        </div>
      </div>
    </Container>
  );
}
