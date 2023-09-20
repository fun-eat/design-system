import { css } from 'styled-components';

const fonts = css`
  html {
    font-size: 62.5%;
  }
  body,
  button,
  input,
  textarea {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColors.default};
  }
`;

export default fonts;
