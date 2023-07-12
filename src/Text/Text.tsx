import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import styled from 'styled-components';

import theme from '@styles/theme';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextTypes = Extract<ElementType, 'p' | 'span'>;
type TextAligns = 'left' | 'center' | 'right';
type TextWeights = 'light' | 'regular' | 'bold';

interface TextStyleProps {
  type?: TextTypes;
  size?: Sizes;
  weight?: TextWeights;
  lineHeight?: Sizes;
  color?: string;
  align?: TextAligns;
}

export type TextProps<T extends TextTypes> = TextStyleProps &
  PropsWithChildren<ComponentPropsWithoutRef<T>> & { as?: T };

const Text = <T extends TextTypes = 'p'>({
  children,
  type,
  size = 'md',
  weight = 'regular',
  lineHeight = 'md',
  color = theme.textColors.default,
  align = 'left',
  ...props
}: TextProps<T>) => {
  return (
    <TextContainer as={type} size={size} weight={weight} lineHeight={lineHeight} color={color} align={align} {...props}>
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
