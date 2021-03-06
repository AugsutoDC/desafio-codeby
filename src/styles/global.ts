import { createGlobalStyle } from 'styled-components'

export const GlobalSyle = createGlobalStyle`
    :root {        
        --red: #e52e4d;
        --green: #1b7c0b;
        --blue: #3c73f1;
        
        --green-light: #c7ffa6;
        --blue-light: #6933ff;

        --text-tile: #363f5f;
        --text-body: #969cb3;

        --background: #d0d8e5;
        --shape: #ffffff;

        --grey: #afafaf;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 728px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;