import type { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  /**
   * Divider 컴포넌트의 종류입니다. 강조의 정도 차이가 있습니다.
   */
  variant?: 'default' | 'strong' | 'disabled';
  /**
   * Divider 컴포넌트의 길이입니다.
   */
  width?: string;
}

const Divider = ({ variant = 'default', width = '100%', css, ...props }: DividerProps) => {
  return <DividerContainer variant={variant} width={width} css={css} {...props} />;
};

export default Divider;

type DividerStyleProps = Pick<DividerProps, 'variant' | 'width'>;

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

const DividerContainer = styled.hr<DividerStyleProps>`
  ${({ variant }) => dividerStyles[variant ?? 'default']};
  height: 1px;
  width: ${({ width }) => width};
  border: 0;
`;
