import styled, { css } from 'styled-components';

import type { ComponentPropsWithoutRef } from 'react';

import type { ColorKeys } from '@styles/theme';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Button 컴포넌트의 색상입니다.
   */
  color: ColorKeys;
  /**
   * Button 컴포넌트의 텍스트 색상입니다.
   */
  textColor?: ColorKeys;
  /**
   * Button 컴포넌트의 스타일로 배경색 없이 아웃라인이 있는지, 배경색이 있고 아웃라인이 없는지 설정할 수 있습니다.
   */
  variant: 'outlined' | 'filled';
  /**
   * Button 컴포넌트의 크기입니다.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Button = ({ color, textColor = 'black', variant = 'filled', size = 'md', children, ...props }: ButtonProps) => {
  return (
    <ButtonContainer color={color} textColor={textColor} variant={variant} size={size} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

type ButtonStyleProps = Pick<ButtonProps, 'color' | 'textColor' | 'variant' | 'size'>;

const buttonStyleTypeStyles = {
  outlined: (color: ColorKeys) => css`
    border: 1px solid ${({ theme }) => theme.colors[color]};
    background: transparent;
    color: ${({ theme }) => theme.colors[color]};
  `,
  filled: (color: ColorKeys) => css`
    background-color: ${({ theme }) => theme.colors[color]};
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
  color: ${({ textColor }) => textColor};
  ${({ variant, color }) => buttonStyleTypeStyles[variant](color)};
  ${({ size }) => buttonTypeStyles[size ?? 'md']};
`;
