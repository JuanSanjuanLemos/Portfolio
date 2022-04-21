import Image from "next/image";
import { ButtonLink } from "./style";

interface ButtonProps{
  color: string;
  text: string;
  imgURL: string;
  link: string;
}

export function Button({color, text,link, imgURL}:ButtonProps){
  return(
    <a href={link} rel="noopener noreferrer" target='_blank'>
      <ButtonLink className={color=== 'blue' ? '-button-blue' : '-button-pink'}>
        <Image height='24px' width='24px' src={imgURL} alt={text} />
        {text}
      </ButtonLink>
    </a>
  )
}