import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColors.default};
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
