import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import ToastProvider from './Toast/context/ToastContext';

const FunEatProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};

export default FunEatProvider;
