import { createGlobalStyle } from "styled-components";

interface ThemeStyle {
  mainColor: string;
  mainColor200: string;
  text: string;
  textSecond: string;
  blue: string;
  icon: string;
  body: string;
  hover: string;
}

export const lightTheme = {
  mainColor: "#ebebeb",
  mainColor200: "#c4c4c4",
  text: "#121212",
  textSecond: "#151515",
  blue: "#2236c5",
  icon: "#5c5c5c",
  body: "#f3f3f3",
  hover: "#b9b9b9",
};
export const darkTheme = {
  mainColor: "#121212",
  mainColor200: "#151515",
  text: "#fff",
  textSecond: "#c4c4c4",
  blue: "#00D2DF",
  icon: "#fefefe",
  body: "#040404",
  hover: "#383838"
};

export const GlobalStyle = createGlobalStyle<{ theme: ThemeStyle }>`
    :root {
        --main-color: ${({ theme }) => theme.mainColor};
        --main-color-200: ${({ theme }) => theme.mainColor200};
        --text: ${({ theme }) => theme.text};
        --text-second: ${({ theme }) => theme.textSecond};
        --blue: ${({ theme }) => theme.blue};
        --icon: ${({ theme }) => theme.icon};
        --body: ${({ theme }) => theme.body};
        --hover: ${({theme}) => theme.hover};
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
    body{
        background-color: var(--body);
    }
    body, body > *{
        transition: background 0.3s linear;
    }
    body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .button-theme{
        height: 30px;
        width: 30px;
        background-color: #000;

        border: none;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        
        &.-dark{
            color: yellow;
        }
        &.-light{
            color: #fff;
        }

        font-size: 1rem;
        span{
            height: 1rem;
        }
    }
    .container{
        padding-left: 3rem;
        padding-right: 3rem;
        
        @media (max-width: 1024px) {
            &{
                padding-left: 2rem;
                padding-right: 2rem;
            } 
        }
        @media (max-width: 576px) {
            &{
                padding-left: 1rem;
                padding-right: 1rem;
            } 
        }
    }
`;
