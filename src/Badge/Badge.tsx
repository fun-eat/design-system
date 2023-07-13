import { css, styled } from 'styled-components';

import type { Sizes } from '@types';
import type { ComponentPropsWithoutRef } from 'react';
import type { RuleSet } from 'styled-components';

interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  color: string;
  textColor: string;
  size?: Sizes;
}

const Badge = ({ color, textColor, size = 'sm', children, ...props }: BadgeProps) => {
  return (
    <BadgeContainer color={color} textColor={textColor} size={size} {...props}>
      <span>{children}</span>
    </BadgeContainer>
  );
};

export default Badge;

const badgeSizeStyles: { [key in Sizes]: RuleSet<object> } = {
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

export const BadgeContainer = styled.div<Pick<BadgeProps, 'color' | 'textColor' | 'size'>>`
  width: fit-content;
  padding: 8px 12px;
  color: ${({ textColor }) => textColor};
  background: ${({ color }) => color};
  border-radius: 8px;
  ${({ size }) => badgeSizeStyles[size ? size : 'sm']}
`;
