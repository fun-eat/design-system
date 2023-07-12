import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';

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

const textSizeStyles: Record<Sizes, RuleSet<object>> = {
  xs: css`
    font-size: 1.2rem;
  `,
  sm: css`
    font-size: 1.4rem;
  `,
  md: css`
    font-size: 1.6rem;
  `,
  lg: css`
    font-size: 1.8rem;
  `,
  xl: css`
    font-size: 2rem;
  `,
};

const textWeightStyles: Record<TextWeights, RuleSet<object>> = {
  light: css`
    font-weight: 300;
  `,
  regular: css`
    font-weight: 400;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const textLineHeightStyles: Record<Sizes, RuleSet<object>> = {
  xs: css`
    line-height: 1;
  `,
  sm: css`
    line-height: 1.2;
  `,
  md: css`
    line-height: 1.5;
  `,
  lg: css`
    line-height: 1.8;
  `,
  xl: css`
    line-height: 2;
  `,
};

const TextContainer = styled.p<Pick<TextProps, 'type' | 'align' | 'size' | 'lineHeight' | 'weight'>>`
  ${({ size }) => textSizeStyles[size ?? 'md']}
  ${({ weight }) => textWeightStyles[weight ?? 'regular']};
  ${({ lineHeight }) => textLineHeightStyles[lineHeight ?? 'md']}

  color: ${({ color }) => color ?? theme.textColors.default};
  text-align: ${({ align }) => align};
`;
