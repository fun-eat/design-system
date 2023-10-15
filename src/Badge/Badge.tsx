import type { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react';
import type { RuleSet, CSSProp } from 'styled-components';
import styled, { css } from 'styled-components';

import type { Sizes } from '../types';

type TextElement = Extract<ElementType, 'p' | 'span'>;

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Badge 컴포넌트의 element 타입입니다.
   */
  element?: TextElement;
  /**
   * Badge 컴포넌트 내부 색상입니다.
   */
  color: CSSProperties['color'];
  /**
   * Badge 컴포넌트에 들어갈 텍스트의 색상입니다.
   */
  textColor: CSSProperties['color'];
  /**
   * Badge 컴포넌트에 들어갈 텍스트의 크기입니다.
   */
  size?: Sizes;
  /**
   * Badge 컴포넌트에 적용할 CSS 스타일입니다.
   */
  css?: CSSProp;
}

const Badge = ({ element, color, textColor, size = 'sm', children, ...props }: BadgeProps) => {
  return (
    <BadgeContainer as={element} color={color} textColor={textColor} size={size} {...props}>
      {children}
    </BadgeContainer>
  );
};

export default Badge;

type BadgeStyleProps = Pick<BadgeProps, 'color' | 'textColor' | 'size'>;

const badgeSizeStyles: Record<Sizes, RuleSet<object>> = {
  xs: css`
    font-size: 1rem;
  `,
  sm: css`
    font-size: 1.2rem;
  `,
  md: css`
    font-size: 1.4rem;
  `,
  lg: css`
    font-size: 1.6rem;
  `,
  xl: css`
    font-size: 1.8rem;
  `,
};

export const BadgeContainer = styled.span<BadgeStyleProps>`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  ${({ size }) => badgeSizeStyles[size ?? 'sm']}
  ${({ css }) => css}
`;
