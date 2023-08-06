export type Colors = typeof colors;
export type TextColors = typeof textColors;
export type BorderColors = typeof borderColors;
export type DividerColors = typeof dividerColors;
export type BackgroundColors = typeof backgroundColors;

export type FontSizes = typeof fontSizes;
export type FontWeights = typeof fontWeights;
export type LineHeights = typeof lineHeights;

export type BorderRadius = typeof borderRadius;

const colors = {
  primary: '#D8EAFF',
  secondary: '#FFEC99',
  tertiary: '#FFCFCF',

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
  light: colors.gray1,
} as const;

const tagColors = {
  taste: colors.tertiary,
  price: colors.secondary,
  etc: colors.primary,
} as const;

const fontSizes = {
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '2rem',
} as const;

const fontWeights = {
  light: 300,
  regular: 400,
  bold: 700,
} as const;

const lineHeights = {
  xs: 1,
  sm: 1.2,
  md: 1.5,
  lg: 1.8,
  xl: 2,
} as const;

const borderRadius = {
  xs: '4px',
  sm: '8px',
  md: '10px',
  lg: '12px',
  xl: '14px',
} as const;

const theme = {
  colors,
  textColors,
  borderColors,
  dividerColors,
  backgroundColors,
  tagColors,

  fontSizes,
  fontWeights,
  lineHeights,

  borderRadius,
};

export type ColorKeys = keyof typeof colors;
export type TextColorKeys = keyof typeof textColors;
export type FontWeightKeys = keyof typeof fontWeights;

export type Theme = typeof theme;

export default theme;
