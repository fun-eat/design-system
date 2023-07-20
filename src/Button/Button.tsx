import type { ComponentPropsWithoutRef } from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';

import type { ColorKeys, TextColorKeys } from '../styles/theme';
import type { Sizes } from '../types';

type ButtonVariants = 'outlined' | 'filled';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Button 컴포넌트의 색상입니다.
   */
  color: ColorKeys;
  /**
   * Button 컴포넌트의 텍스트 색상입니다.
   */
  textColor?: TextColorKeys;
  /**
   * Button 컴포넌트의 스타일로 배경색 없이 아웃라인이 있는지, 배경색이 있고 아웃라인이 없는지 설정할 수 있습니다.
   */
  variant: ButtonVariants;
  /**
   * Button 컴포넌트의 크기입니다.
   */
  size?: Sizes;
}

const Button = ({
  color,
  textColor = 'default',
  variant = 'filled',
  size = 'md',
  children,
  css,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer color={color} textColor={textColor} variant={variant} size={size} css={css} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

type ButtonStyleProps = Pick<ButtonProps, 'color' | 'textColor' | 'variant' | 'size'>;
type ButtonVariantStyles = Record<
  ButtonVariants,
  (color: ButtonStyleProps['color'], textColors: ButtonStyleProps['textColor']) => RuleSet<object>
>;

const buttonStyleTypeStyles: ButtonVariantStyles = {
  outlined: (color, textColor) => css`
    border: 1px solid ${({ theme }) => theme.colors[color]};
    background: transparent;
    color: ${({ theme }) => theme.textColors[textColor ?? 'default']};
  `,
  filled: (color, textColor) => css`
    background-color: ${({ theme }) => theme.colors[color]};
    color: ${({ theme }) => theme.textColors[textColor ?? 'default']};
  `,
};

const buttonTypeStyles = {
  xs: css`
    padding: 6px 12px;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
  sm: css`
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: 10px 20px;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  lg: css`
    padding: 12px 24px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
  xl: css`
    padding: 18px 130px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `,
};

const ButtonContainer = styled.button<ButtonStyleProps>`
  ${({ variant, color, textColor }) => buttonStyleTypeStyles[variant](color, textColor)};
  ${({ size }) => buttonTypeStyles[size ?? 'md']};
`;
