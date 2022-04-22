import { BsList } from "react-icons/bs";
import { ReactNode, useEffect, useState} from "react";

import { Container } from "./style";

interface HeaderProps{
  children: ReactNode;
}

export function Header({children}:HeaderProps) {
  const [wideSize ,setWizeSize] = useState(0);
  useEffect(()=>{
    setWizeSize(window.innerWidth)
    console.log(wideSize)
  },[])
  return (
    <Container>
      <div className="content">
        <p className="logo">Portfólio</p>
        {wideSize > 768 ? (
          <ul>
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
          <p>Mobile {children}</p>
        )}
      </div>
    </Container>
  );
}
