import { ButtonBlue, ButtonPink } from "./style";

interface ButtonProps{
  color: string;
  text: string;
  imgURL: string;
  link: string;
}

export function Button({color, text,link, imgURL}:ButtonProps){
  if (color === 'pink'){
    return(
      <ButtonPink >
        <img src={imgURL} alt={text} />
        <a href={link} target='_blank'>{text}</a>
      </ButtonPink>
    )
  }

  if (color === 'blue'){
    return(
      <ButtonBlue>
        <img src={imgURL} alt={text} />
        <a href={link} target='_blank'>{text}</a>
      </ButtonBlue>
    )
  }

  return(
    <button>
      {text}
    </button>
  )

}