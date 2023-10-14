import type { CSSProperties, ElementType } from 'react';
import type { CSSProp } from 'styled-components';
import styled from 'styled-components';

import type { FontWeightKeys } from '../styles/theme';
import theme from '../styles/theme';
import type { Sizes, OverridableComponentPropsWithoutRef } from '../types';

type TextElement = Extract<ElementType, 'p' | 'span'>;
type TextAligns = 'left' | 'center' | 'right';

interface TextStyleProps {
  /**
   * Text 컴포넌트의 HTML 태그입니다.
   */
  element?: TextElement;
  /**
   * Text 컴포넌트의 폰트 크기입니다.
   */
  size?: Sizes;
  /**
   * Text 컴포넌트의 폰트 가중치입니다.
   */
  weight?: FontWeightKeys;
  /**
   * Text 컴포넌트의 텍스트 높이입니다.
   */
  lineHeight?: Sizes;
  /**
   * Text 컴포넌트의 텍스트 색상입니다.
   */
  color?: CSSProperties['color'];
  /**
   * Text 컴포넌트의 텍스트 정렬입니다.
   */
  align?: TextAligns;
  /**
   * Text 컴포넌트에 추가적으로 적용할 CSS 속성입니다.
   */
  css?: CSSProp;
}

export type TextProps<T extends TextElement> = OverridableComponentPropsWithoutRef<T, TextStyleProps>;

const Text = <T extends TextElement = 'p'>({
  children,
  element,
  size = 'md',
  weight = 'regular',
  lineHeight = 'md',
  color = theme.textColors.default,
  align = 'left',
  ...props
}: TextProps<T>) => {
  return (
    <TextContainer
      as={element}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      color={color}
      align={align}
      {...props}
    >
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.p<TextStyleProps>`
  font-size: ${({ theme, size }) => theme.fontSizes[size ?? 'md']};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight ?? 'regular']};
  line-height: ${({ theme, lineHeight }) => theme.lineHeights[lineHeight ?? 'md']};
  color: ${({ color }) => color ?? theme.textColors.default};
  text-align: ${({ align }) => align};
  ${({ css }) => css}
`;
