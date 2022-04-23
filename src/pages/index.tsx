import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <>
      <Presentation />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
