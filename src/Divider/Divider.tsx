import type { ComponentPropsWithoutRef } from 'react';
import type { CSSProp } from 'styled-components';
import styled, { css } from 'styled-components';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  /**
   * Divider 컴포넌트의 종류입니다. 강조의 정도 차이가 있습니다.
   */
  variant?: 'default' | 'strong' | 'disabled';
  /**
   * Divider 컴포넌트의 길이입니다.
   */
  customWidth?: string;
  /**
   * Divider 컴포넌트의 두께입니다.
   */
  customHeight?: string;
  /**
   * Divider 컴포넌트에 적용할 CSS 스타일입니다.
   */
  css?: CSSProp;
}

const Divider = ({ variant = 'default', customWidth = '100%', customHeight = '1px', ...props }: DividerProps) => {
  return <DividerContainer variant={variant} customWidth={customWidth} customHeight={customHeight} {...props} />;
};

export default Divider;

type DividerStyleProps = Pick<DividerProps, 'variant' | 'customWidth' | 'customHeight'>;

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
  width: ${({ customWidth }) => customWidth};
  height: ${({ customHeight }) => customHeight};
  border: 0;
  ${({ css }) => css}
`;
