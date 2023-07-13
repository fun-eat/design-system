import 'styled-components';
import type {
  BackgroundColors,
  BorderColors,
  BorderRadius,
  Colors,
  DividerColors,
  FontSizes,
  FontWeights,
  LineHeights,
  TextColors,
} from './theme';
import type { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    textColors: TextColors;
    borderColors: BorderColors;
    dividerColors: DividerColors;
    backgroundColors: BackgroundColors;

    fontSizes: FontSizes;
    fontWeights: FontWeights;
    lineHeights: LineHeights;

    borderRadius: BorderRadius;
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
