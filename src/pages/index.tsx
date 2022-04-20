import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";

export default function Home(){
  return(
    <>
      <Header />
      <Presentation />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  )
}