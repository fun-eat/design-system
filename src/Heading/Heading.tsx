import type { ElementType } from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';

import type { FontWeightKeys } from '../styles/theme';
import type { OverridableComponentPropsWithoutRef, Sizes } from '../types';

type HeadingElement = Extract<ElementType, 'h1' | 'h2' | 'h3'>;

interface HeadingStyleProps {
  element?: HeadingElement;
  /**
   * Heading 컴포넌트의 폰트 크기입니다.
   */
  size?: Sizes;
  /**
   * Heading 컴포넌트의 폰트 가중치입니다.
   */
  weight?: FontWeightKeys;
}

export type HeadingProps<T extends HeadingElement> = OverridableComponentPropsWithoutRef<T, HeadingStyleProps>;

const Heading = <T extends HeadingElement = 'h1'>({ children, size, css, as, ...props }: HeadingProps<T>) => {
  return (
    <HeadingContainer as={as} element={as} size={size} css={css} {...props}>
      {children}
    </HeadingContainer>
  );
};

export default Heading;

type HeadingStyleFunction = (size: HeadingStyleProps['size']) => RuleSet<object>;

const headingSizeStyles: Record<HeadingElement, HeadingStyleFunction> = {
  h1: (size) => css`
    font-size: ${({ theme }) => (size ? theme.fontSizes[size] : '3.4rem')};
  `,
  h2: (size) => css`
    font-size: ${({ theme }) => (size ? theme.fontSizes[size] : '2.8rem')};
  `,
  h3: (size) => css`
    font-size: ${({ theme }) => (size ? theme.fontSizes[size] : '2.2rem')};
  `,
};

const HeadingContainer = styled.h1<HeadingStyleProps>`
  ${({ element, size }) => headingSizeStyles[element ?? 'h1'](size)}
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight ?? 'bold']};
`;
