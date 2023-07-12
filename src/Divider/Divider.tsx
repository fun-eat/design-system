import type { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

export interface DividerProps extends ComponentPropsWithoutRef<'div'> {
  type?: 'default' | 'strong' | 'disabled';
  length?: string;
}

const Divider = ({ type = 'default', length = '100%', ...props }: DividerProps) => {
  return <DividerContainer type={type} length={length} {...props} />;
};

const dividerStyles = {
  default: css`
    border-bottom: 1px solid ${({ theme }) => theme.dividerColors.default};
  `,
  strong: css`
    border-bottom: 1px solid ${({ theme }) => theme.dividerColors.strong};
  `,
  disabled: css`
    border-bottom: 1px solid ${({ theme }) => theme.dividerColors.disabled};
  `,
};

const DividerContainer = styled.div<DividerProps>`
  ${({ type }) => dividerStyles[!type ? (type = 'default') : type]}
`;

export default Divider;
