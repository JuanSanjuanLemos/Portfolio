import { ReactNode, useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import useWindowDimensions from "../../hooks/UseWindowDimension";


import { Button, Container, Menu } from "./style";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <div className="content">
          <p className="logo">Portfólio</p>
          {width > 768 ? (
            <ul className="ul-md">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-me">Sobre mim</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>{children}</li>
            </ul>
          ) : (
              <Button onClick={() => setIsOpen(!isOpen)}>
                <BsList />
              </Button>
              
          )}
        </div>
      </Container>
      {isOpen && (
        <Menu>
          <Button onClick={() => setIsOpen(!isOpen)} className='button-close'>
                <BsXLg />
          </Button>
          <ul className="ul-sm">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-me">Sobre mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>{children}</li>
          </ul>
      </Menu>
      )}
    </>
  );
}
