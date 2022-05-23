import { GetStaticProps } from "next";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import getPrismicClient from "../services/prismic";
import * as prismic from '@prismicio/client';
import {RichText} from 'prismic-dom';
import { useState } from "react";


interface Projetc {
  uid: string;
  title: string;
  description: string;
  technologies: string;
  urlImage: string;
  urlWebSite: string;
  urlRepository: string;
}

interface HomeProps{
  projects: Projetc[];
}

export default function Home({projects}:HomeProps) {
  const [listProjects, setListProjects] = useState(projects)
  return (
    <>
      <main>
        <Presentation />
        <AboutMe />
        <Projects projects={projects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();
  const response = await client.get({
    predicates: prismic.predicate.at("document.type", "project"),

  });
  const projects: Projetc[] = response.results.map(project =>{
    return{
      uid:project.uid!,
      title: RichText.asText(project.data.title) as string,
      description: RichText.asText(project.data.description)as string,
      urlImage: project.data.image.url,
      technologies: RichText.asText(project.data.tecnologies)as string,
      urlWebSite: project.data.website.url,
      urlRepository: project.data.website.url,
    }
  })

  return {
    props: {
      projects
    },
    revalidate: 60* 60 // 1 hour
  };
};