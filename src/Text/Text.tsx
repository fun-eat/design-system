import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import styled from 'styled-components';

import theme from '@styles/theme';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextTypes = Extract<keyof JSX.IntrinsicElements, 'p' | 'span'>;
type TextAligns = 'left' | 'center' | 'right';
type TextWeights = 'light' | 'regular' | 'bold';

export interface TextProps extends PropsWithChildren<ComponentPropsWithoutRef<'p'>> {
  type?: TextTypes;
  size?: Sizes;
  weight?: TextWeights;
  lineHeight?: Sizes;
  color?: string;
  align?: TextAligns;
}

const Text = ({
  children,
  type,
  size = 'md',
  weight = 'regular',
  lineHeight = 'md',
  color = theme.textColors.default,
  align = 'left',
  ...props
}: TextProps) => {
  return (
    <TextContainer as={type} size={size} weight={weight} lineHeight={lineHeight} color={color} align={align} {...props}>
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.p<Pick<TextProps, 'type' | 'align' | 'size' | 'lineHeight' | 'weight'>>`
  font-size: ${({ theme, size }) => theme.fontSizes[size ?? 'md']};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight ?? 'regular']};
  line-height: ${({ theme, lineHeight }) => theme.lineHeights[lineHeight ?? 'md']};
  color: ${({ color }) => color ?? theme.textColors.default};
  text-align: ${({ align }) => align};
`;
