import styled, { css } from 'styled-components';

import type { ComponentPropsWithoutRef } from 'react';
import type { DefaultTheme } from 'styled-components/dist/types';

import type { ColorKeys } from '@styles/theme';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color: ColorKeys;
  textColor?: ColorKeys;
  variant: 'outlined' | 'filled';
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

const buttonStyleTypeStyles = {
  outlined: (color: ColorKeys) => css`
    border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors[color]};
    background: transparent;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors[color]};
  `,
  filled: (color: ColorKeys) => css`
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors[color]};
  `,
};

const buttonTypeStyles = {
  xs: css`
    padding: 6px 12px;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-size: 0.75rem;
  `,
  sm: css`
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
  md: css`
    padding: 10px 20px;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  lg: css`
    padding: 12px 24px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  xl: css`
    padding: 18px 130px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `,
};

const ButtonContainer = styled.button<ButtonProps>`
  color: ${({ textColor }) => textColor};
  ${({ variant, color }) => buttonStyleTypeStyles[variant](color)};
  ${({ size }) => buttonTypeStyles[size ?? 'md']};
`;
