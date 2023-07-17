import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('theme을 사용하려면 App을 FunEatProvider로 감싸주세요.');
  }

  return theme;
};

export default useTheme;
