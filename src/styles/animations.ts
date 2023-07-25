import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  0% {
    bottom: -300px;
  }
  100% {
    bottom: 0;
  }
`;

export const slideDown = keyframes`
  0% {
    bottom: 0;
  }
  100% {
    bottom:-300px
  }
`;
