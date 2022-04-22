import Image from "next/image";
import { ReactNode } from "react";
import { ButtonLink } from "./style";

interface ButtonProps{
  color: string;
  text: string;
  children: ReactNode;
  link: string;
}

export function Button({color, text,link, children}:ButtonProps){
  return(
    <a href={link} rel="noopener noreferrer" target='_blank'>
      <ButtonLink className={color=== 'blue' ? '-button-blue' : '-button-pink'}>
        <span>
          {children}
        </span>
        {text}
      </ButtonLink>
    </a>
  )
}