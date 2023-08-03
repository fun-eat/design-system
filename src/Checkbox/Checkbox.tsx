import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';

import type { FontWeightKeys } from '../styles/theme';
import Text from '../Text';
import type { Sizes } from '../types';

type CheckboxBaseProps = Pick<ComponentPropsWithRef<'input'>, 'checked' | 'children' | 'onChange'>;

export interface CheckboxProps extends CheckboxBaseProps {
  /**
   * Checkbox 컴포넌트의 크기입니다.
   */
  size?: Sizes;
  /**
   * Checkbox 컴포넌트의 폰트 크기입니다.
   */
  fontSize?: Sizes;
  /**
   * Checkbox 컴포넌트의 라벨 폰트 가중치입니다.
   */
  weight?: FontWeightKeys;
  /**
   * Checkbox 컴포넌트의 tabIndex 값 입니다.
   */
  tabIndex?: -1 | 0 | 1;
}

const Checkbox = (
  { children, size = 'md', fontSize = 'md', weight = 'regular', tabIndex, ...props }: CheckboxProps,
  ref: ForwardedRef<HTMLLabelElement>
) => {
  return (
    <CheckboxContainer ref={ref} fontSize={fontSize} weight={weight} tabIndex={tabIndex}>
      <CheckboxWrapper type="checkbox" size={size} {...props} />
      <CheckText as="span" size={size} aria-hidden="true" />
      <LabelText as="span">{children}</LabelText>
    </CheckboxContainer>
  );
};

export default forwardRef(Checkbox);

type CheckboxStyleProps = Pick<CheckboxProps, 'size' | 'fontSize' | 'weight'>;

const checkboxSizeStyles: Record<Sizes, RuleSet<object>> = {
  xs: css`
    width: 20px;
    height: 20px;
  `,
  sm: css`
    width: 24px;
    height: 24px;
  `,
  md: css`
    width: 28px;
    height: 28px;
  `,
  lg: css`
    width: 32px;
    height: 32px;
  `,
  xl: css`
    width: 36px;
    height: 36px;
  `,
};

const checkSizeStyles: Record<Sizes, RuleSet<object>> = {
  xs: css`
    width: 4px;
    height: 8px;
    border: solid ${({ theme }) => theme.colors.gray4};
    border-width: 0 2px 2px 0;
  `,
  sm: css`
    width: 6px;
    height: 12px;
    border: solid ${({ theme }) => theme.colors.gray4};
    border-width: 0 2px 2px 0;
  `,
  md: css`
    width: 6px;
    height: 12px;
    border: solid ${({ theme }) => theme.colors.gray4};
    border-width: 0 3px 3px 0;
  `,
  lg: css`
    width: 8px;
    height: 16px;
    border: solid ${({ theme }) => theme.colors.gray4};
    border-width: 0 3px 3px 0;
  `,
  xl: css`
    width: 10px;
    height: 20px;
    border: solid ${({ theme }) => theme.colors.gray4};
    border-width: 0 4px 4px 0;
  `,
};

const CheckboxContainer = styled.label<CheckboxStyleProps>`
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize ?? 'md']};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight ?? 'regular']};
  cursor: pointer;
`;

const CheckboxWrapper = styled.input<CheckboxStyleProps>`
  display: none;

  &:checked + span {
    background: ${({ theme }) => theme.colors.primary};
    border: none;
  }

  &:checked + span::after {
    ${({ size }) => checkSizeStyles[size ?? 'md']}

    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const CheckText = styled(Text)<CheckboxStyleProps>`
  ${({ size }) => checkboxSizeStyles[size ?? 'md']}

  position: relative;
  border: 2px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: 4px;
`;

const LabelText = styled(Text)`
  margin-left: 12px;
`;
