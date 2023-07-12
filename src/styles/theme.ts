import type { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#D8EAFF',
  secondary: '#FFEC99',

  white: '#ffffff',
  gray1: '#F7F7F7',
  gray2: '#DDDDDD',
  gray3: '#A0A0A0',
  gray4: '#6B6B6B',
  gray5: '#444444',
  black: '#232527',

  information: '#2C70FF',
  success: '#30CF73',
  caution: '#FDBE2F',
  error: '#FB4336',
} as const;

const textColors = {
  default: colors.black,
  sub: colors.gray5,
  info: colors.gray4,
  disabled: colors.gray3,
  white: colors.white,
} as const;

const borderColors = {
  default: colors.gray3,
  strong: colors.gray4,
  disabled: colors.gray2,
} as const;

const dividerColors = {
  default: colors.gray3,
  strong: colors.gray4,
  disabled: colors.gray2,
} as const;

const backgroundColors = {
  default: colors.white,
} as const;

const theme: DefaultTheme = {
  colors,
  textColors,
  borderColors,
  dividerColors,
  backgroundColors,
};

export type Colors = keyof typeof colors;

export default theme;
