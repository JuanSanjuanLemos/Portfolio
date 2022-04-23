import { createGlobalStyle} from "styled-components";

interface ThemeStyle {
  mainColor: string;
  mainColor200: string;
  text: string;
  textSecond: string;
  blue: string;
}


export const lightTheme = {
    mainColor: "#ebebeb",
    mainColor200: "#c4c4c4",
    text: "#121212",
    textSecond: "#151515",
    blue: "#2236c5",
  };
  export const darkTheme = {
    mainColor: "#121212",
    mainColor200: "#151515",
    text: "#fff",
    textSecond: "#c4c4c4",
    blue: "#00D2DF",
  };

export const GlobalStyle = createGlobalStyle<{ theme: ThemeStyle }>`
    :root {
        --main-color: ${({ theme }) => theme.mainColor};
        --main-color-200: ${({ theme }) => theme.mainColor200};
        --text: ${({ theme }) => theme.text};
        --text-second: ${({ theme }) => theme.textSecond};
        --blue: ${({ theme }) => theme.blue};
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
        background-color: var(--main-color);
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
        border-radius: 50%;
        text-align: center;
        &.-dark{
            background-color: #fff;
        }
        &.-light{
            background-color: #000;
        }
    }
`;
