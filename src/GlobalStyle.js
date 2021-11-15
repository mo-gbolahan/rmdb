import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontExBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;

    }

    * {
        box_sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 400;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 400;
        }

        p {
            font-size: 1rem;
            font-weight: thin;
            color: var(--white);
        }
    }
`;