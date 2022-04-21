import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";

import { BsList } from "react-icons/bs";
import { ReactNode, useState } from "react";

import { Container } from "./style";

interface HeaderProps{
  children: ReactNode;
}

export function Header({children}:HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Container>
      <div className="content">
        <p className="logo">Portfólio</p>
        {isWideVersion ? (
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
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="unstyled"
              className="button-menu"
              fontSize="2rem"
              icon={<BsList />}
            />
            <MenuList className="wrapper-menu">
              <MenuItem>
                <a href="#home">Home</a>
              </MenuItem>
              <MenuItem>
                <a href="#about-me">Sobre mim</a>
              </MenuItem>
              <MenuItem>
                <a href="#projects">Projetos</a>
              </MenuItem>
                {children}
            </MenuList>
          </Menu>
        )}
      </div>
    </Container>
  );
}
