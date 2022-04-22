import { ReactNode, useState } from "react";
import { Button, Container } from "./style";
import { BsList, BsXLg } from "react-icons/bs";

interface MenuProps{
  children: ReactNode;
}

export function Menu({children}: MenuProps){
  const [isOpen, setIsOpen] = useState(false);
  return(
    !isOpen ? <Button onClick={() => setIsOpen(!isOpen)} className="button-list"><BsList /></Button> : (
      <Container>
        <Button onClick={() => setIsOpen(!isOpen)} className="button-close"><BsXLg /></Button>
        <ul className="ul-sm">
          <li>Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>{children}</li>
        </ul>
      </Container>
    )
  )
}