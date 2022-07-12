import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    text: 'tomato',
    toggleBorder: '#FFF',
    background: '#999',
};

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#363537',
};

export const sharedTheme = {
    // Temp fonts
    fonts: {
        title: 'Space Grotesk, sans-serif',
        main: 'Space Grotesk, sans-serif',
    },
    // Colors for layout
    colors: {
        primary1: 'hsl(204,23.8%,95.9%)',
        background1: '#0F1624',
        accent1: 'hsl(34.9,98.6%,72.9%)',
        button: 'hsl(205.1,100%,36.1%)',
        background2: 'hsl(232.7,27.3%,23.7%)',
    },
    // Breakpoints for responsive design
    breakpoints: {
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)',
    },
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        // font-size: 62.5%;
        scroll-behavior: smooth;

    }
    body {
        font-family: ${({ theme }) => theme.fonts.main};
        font-size: 1.6rem;
        background: ${({ theme }) => theme.colors.background1};
        color: ${({ theme }) => theme.colors.primary1};
        cursor: default;
        transition: all 0.50s linear;
    }
    h1,h2,h3,h4,h5,h6,button {
        font-family: ${({ theme }) => theme.fonts.title};
    }
    a {
        text-decoration: none;
    }
    li{
        list-style: none;
    }
`;

// background: ${({ theme }) => theme.body};
//         color: ${({ theme }) => theme.text};
//         font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
