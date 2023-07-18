import { createGlobalStyle } from "styled-components";

export const GlobaStyle = createGlobalStyle`
    @font-face {
        font-family: 'AquelaFonte';
        src: url('src/assets/aquelafonte.ttf') format('truetype');
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        height: 100vh;
    }
    body, input, button {
        font-size: 1rem;
    }
    h1, h2, h3, h4, p, span {
        font-weight: 700;
    }
    button {
        cursor: pointer;
        background-color: white;
    }
    figcaption {
        display: none;
    }
    ul{
        list-style: none;
    }
`;
