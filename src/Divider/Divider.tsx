import type { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  variant?: 'default' | 'strong' | 'disabled';
  length?: string;
}

const Divider = ({ variant = 'default', length = '100%', ...props }: DividerProps) => {
  return <DividerContainer variant={variant} length={length} {...props} />;
};

const dividerStyles = {
  default: css`
    background: ${({ theme }) => theme.dividerColors.default};
  `,
  strong: css`
    background: ${({ theme }) => theme.dividerColors.strong};
  `,
  disabled: css`
    background: ${({ theme }) => theme.dividerColors.disabled};
  `,
};

const DividerContainer = styled.hr<DividerProps>`
  ${({ variant }) => dividerStyles[!variant ? (variant = 'default') : variant]}
  height: 1px;
  border: 0;
`;

export default Divider;
