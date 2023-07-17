import 'styled-components';
import type { CSSProp } from 'styled-components';

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
} from './styles/theme';

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
