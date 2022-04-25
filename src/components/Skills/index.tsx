import { SkillCard } from "./SkillCard";
import { Container } from "./style";

import { DiBootstrap, DiCss3, DiHtml5, DiJsBadge, DiReact, DiSass } from "react-icons/di";
import { SiChakraui, SiNextdotjs } from "react-icons/si";

export function Skills(){
  return(
    <Container>
      <div className="content">
        <h1>Minhas Skills</h1>
        <div className="wrapper-cards">
          <SkillCard color="-blue">
            <DiHtml5 />
          </SkillCard>
          <SkillCard color="-pink">
            <DiCss3 />
          </SkillCard>
          <SkillCard color="-blue">
            <DiJsBadge />
          </SkillCard>
          <SkillCard color="-pink">
            <DiReact />
          </SkillCard>
          <SkillCard color="-blue">
            <SiNextdotjs />
          </SkillCard>
          <SkillCard color="-pink">
            <DiSass />
          </SkillCard>
          <SkillCard color="-blue">
            <SiChakraui />
          </SkillCard>
          <SkillCard color="-pink">
            <DiBootstrap />
          </SkillCard>
        </div>
      </div>
    </Container>
  )
}