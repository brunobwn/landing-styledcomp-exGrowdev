import { ThemeProps } from './Theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<ThemeProps>`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    text-decoration: none;
    }

    :root {
        --primary: ${(props) => props.colors.primary};
        --background: ${(props) => props.colors.background};
        --backgroundSecondary: ${(props) => props.colors.backgroundSecondary};
        --text-color: ${(props) => props.colors.textColor}
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        min-height: 100vh;
    }

    #root {
        width: 100%;
        min-height:100%;
    }

    button, input, select, textarea {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a:any-link {
        color: inherit;
    }
`;

export default GlobalStyle;
