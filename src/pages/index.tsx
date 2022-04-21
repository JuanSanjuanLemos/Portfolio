import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Presentation />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}
