import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <>
      <main>
        <Presentation />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
