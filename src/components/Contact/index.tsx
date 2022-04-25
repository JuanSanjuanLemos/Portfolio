import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <div className="content">
        <h1>Vamos conversar?</h1>
        <div className="wrapper-social">
          <a
            href="https://www.linkedin.com/in/juan-lemos-75830b1a2/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/JuanSanjuanLemos"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.instagram.com/_juan.lemos_/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </div>
        <a
          href="mailto:juansanjuan.dev@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>juansanjuan.dev@gmail.com</span>
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://us14.list-manage.com/contact-form?u=0b5d5f99c48e5fa345a8750c9&form_id=3bbda1173c53b7a3401b149bae5d1d96"
        >
          <button>
            <p>Enviar uma mensagem</p>
          </button>
        </a>
      </div>
    </Container>
  );
}
