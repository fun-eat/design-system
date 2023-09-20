import { createGlobalStyle } from 'styled-components';

import fonts from './font';

const GlobalStyle = createGlobalStyle`
${fonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColors.default};
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    outline: none;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  input {
    background-color: transparent;
    border: 0;
  }

  button {
    color: initial;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
