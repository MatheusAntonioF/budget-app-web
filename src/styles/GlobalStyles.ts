import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  body {
    height: 100vh;
    width: 100vw;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background: ${({ theme: { colors } }) => colors.white.light};

    position: relative;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    outline: 0;
    background: transparent;
  }
`;

export { GlobalStyles };
