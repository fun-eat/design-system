import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import ToastProvider from './contexts/ToastContext';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const FunEatProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};

export default FunEatProvider;
