import { Container } from "./style";

export function Header(){
  return(
    <Container>
      <p className="logo">Portfólio</p>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre mim</a></li>
        <li><a href="#">Experiência</a></li>
        <li><a href="#">Projetos</a></li>
      </ul>
    </Container>
  )
}