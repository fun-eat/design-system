import type { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  /**
   * Divider의 종류입니다. 강조의 정도에 차이가 있습니다.
   */
  variant?: 'default' | 'strong' | 'disabled';
  /**
   * Divider의 길이입니다.
   */
  length?: string;
}

const Divider = ({ variant = 'default', length = '100%', ...props }: DividerProps) => {
  return <DividerContainer variant={variant} length={length} {...props} />;
};

export default Divider;

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
  ${({ variant }) => dividerStyles[variant ?? 'default']};
  height: 1px;
  border: 0;
`;
