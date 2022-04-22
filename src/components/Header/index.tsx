import { ReactNode, useEffect, useState} from "react";
import useWindowDimensions from "../../hooks/UseWindowDimension";
import { Menu } from "../Menu";

import { Container } from "./style";

interface HeaderProps{
  children: ReactNode;
}

export function Header({children}:HeaderProps) {
  const {width} = useWindowDimensions();
  return (
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
            <li>
              {children}
            </li>
          </ul>
        ) : (
          <Menu children={children} />
        )}
      </div>
    </Container>
  );
}
