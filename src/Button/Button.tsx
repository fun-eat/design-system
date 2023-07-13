import styled, { css } from 'styled-components';

import type { ComponentPropsWithoutRef } from 'react';

import type { ColorKeys } from '@styles/theme';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color: ColorKeys;
  textColor: ColorKeys;
  styleType: 'outFilled' | 'filled';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Button = ({ color, textColor, styleType = 'filled', size = 'md', children, ...props }: ButtonProps) => {
  return (
    <ButtonContainer color={color} textColor={textColor} styleType={styleType} size={size} {...props}>
      {children}
    </ButtonContainer>
  );
};

const buttonStyleTypeStyles = ({ styleType, color }: Pick<ButtonProps, 'styleType' | 'color'>) => {
  const styles = {
    outFilled: css`
      border: 1px solid ${({ theme }) => theme.colors[color]};
      background: transparent;
      color: ${({ theme }) => theme.colors[color]};
    `,
    filled: css`
      background-color: ${({ theme }) => theme.colors[color]};
    `,
  };
  return styles[styleType];
};

const buttonTypeStyles = {
  xs: css`
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 0.75rem;
  `,
  sm: css`
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 1.2rem;
  `,
  md: css`
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.4rem;
  `,
  lg: css`
    padding: 12px 24px;
    border-radius: 7px;
    font-size: 1.6rem;
  `,
  xl: css`
    padding: 18px 130px;
    border-radius: 10px;
    font-size: 2rem;
  `,
};

const ButtonContainer = styled.button<ButtonProps>`
  color: ${({ textColor }) => textColor};
  ${({ styleType, color }) => buttonStyleTypeStyles({ styleType, color })};
  ${({ size }) => buttonTypeStyles[!size ? 'md' : size]};
`;

export default Button;
