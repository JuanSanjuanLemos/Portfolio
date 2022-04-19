import { createGlobalStyle } from "styled-components/";

export const GlobalStyle = createGlobalStyle`
    :root {
    --main-color: #121212;
    --main-color-200: #151515;
    --text: #fff;
    --text-second: #c4c4c4;
    --blue: #00D2DF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        background-color: var(--main-color) ;
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

`;
