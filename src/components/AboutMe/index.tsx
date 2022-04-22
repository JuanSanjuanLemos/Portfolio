import { Container } from "./style";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

import { Button } from "../Button";
import Image from "next/image";
import { FiDownloadCloud, FiMail } from "react-icons/fi";

export function AboutMe() {
  return (
    <Container id="about-me">
      <div className="content">
        <div className="imageProfile">
          <Image
            layout="fill"
            src="/images/foto.png"
            alt="Foto Juan"
          />
        </div>
        <article>
          <h1>Sobre Mim</h1>

          <h2>Pirapora, Minas Gerais</h2>

          <p>
            Tive meu primeiro contato com o desenvolvimento web aos meus 14
            anos, porém na época não tive a possibilidade de continuar meus
            estudos. Alguns anos se passaram e aqui estou eu, me tornei um
            desenvolver front-end. Atualmente densenvolvo minhas aplicações
            utilizando ReactJs.
          </p>

          <ul>
            <li>
              <a href="">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="">
                <BsLinkedin />
              </a>
            </li>
          </ul>
          <div className="wrapper-buttons">
            <Button
              color="pink"
              link="/files/Currículo.pdf"
              text="Currículo"
            >
              {<FiDownloadCloud />}
            </Button>
            <Button
              color="blue"
              link="mailto:juansanjuan.dev@gmail.com"
              text="Email"
            >
              {<FiMail />}

            </Button>
          </div>
        </article>
      </div>
    </Container>
  );
}
