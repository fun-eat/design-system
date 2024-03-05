import { type CSSProperties, type ElementType } from 'react';

import type { FontWeightKeys } from '../styles/theme';
import type { Sizes, OverridableComponentPropsWithoutRef } from '../types';

import styles from './text.module.css';

type TextElement = Extract<ElementType, 'p' | 'span'>;
type TextAligns = 'left' | 'center' | 'right';
type TextCSS = Omit<CSSProperties, 'fontSize' | 'fontWeight' | 'textAlign' | 'color'>;

interface TextStyleProps {
  /**
   * Text 컴포넌트의 폰트 크기입니다.
   */
  size?: Sizes;
  /**
   * Text 컴포넌트의 폰트 가중치입니다.
   */
  weight?: FontWeightKeys;
  /**
   * Text 컴포넌트의 텍스트 색상입니다.
   */
  color?: CSSProperties['color'];
  /**
   * Text 컴포넌트의 텍스트 정렬입니다.
   */
  align?: TextAligns;
  /**
   * Text 컴포넌트에 적용할 CSS 스타일입니다.
   */
  css?: TextCSS;
}

export type TextProps = OverridableComponentPropsWithoutRef<TextElement, TextStyleProps>;

const Text = ({
  as: Component = 'p',
  children,
  size = 'lg',
  weight = 'regular',
  color,
  align = 'left',
  css = {},
  ...props
}: TextProps) => {
  const style = {
    '--font-size': `var(--font-size-${size})`,
    '--font-weight': `var(--font-weight-${weight})`,
    '--color': color,
    '--align': align,
    ...(css as TextCSS),
  };

  return (
    <Component className={styles.text} style={style} {...props}>
      {children}
    </Component>
  );
};

export default Text;
