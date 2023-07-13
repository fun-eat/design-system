import styled from 'styled-components';

import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

import theme from '@styles/theme';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextElement = Extract<ElementType, 'p' | 'span'>;
type TextAligns = 'left' | 'center' | 'right';
type TextWeights = 'light' | 'regular' | 'bold';

interface TextStyleProps {
  element?: TextElement;
  size?: Sizes;
  weight?: TextWeights;
  lineHeight?: Sizes;
  color?: string;
  align?: TextAligns;
}

export type TextProps<T extends TextElement> = TextStyleProps &
  PropsWithChildren<ComponentPropsWithoutRef<T>> & { as?: T };

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
`;
