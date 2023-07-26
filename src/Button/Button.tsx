import type { ComponentPropsWithoutRef } from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';

import type { ColorKeys, FontWeightKeys, TextColorKeys } from '../styles/theme';
import type { Sizes } from '../types';

type ButtonVariants = 'outlined' | 'filled' | 'transparent';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Button 컴포넌트의 넓이입니다.
   */
  width?: string;
  /**
   * Button 컴포넌트의 높이입니다.
   */
  height?: string;
  /**
   * Button 컴포넌트의 색상입니다.
   */
  color?: ColorKeys;
  /**
   * Button 컴포넌트의 텍스트 색상입니다.
   */
  textColor?: TextColorKeys;
  /**
   * Button 컴포넌트의 폰트 크기입니다.
   */
  size?: Sizes;
  /**
   * Button 컴포넌트의 폰트 가중치입니다.
   */
  weight?: FontWeightKeys;
  /**
   * Button 컴포넌트의 스타일로 배경색 없이 아웃라인이 있는지, 배경색이 있고 아웃라인이 없는지, 투명 배경인지 설정할 수 있습니다.
   */
  variant?: ButtonVariants;
}

const Button = ({
  width = '120px',
  height = '40px',
  color = 'primary',
  textColor = 'default',
  size = 'md',
  weight = 'bold',
  variant = 'filled',
  children,
  css,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      color={color}
      textColor={textColor}
      size={size}
      weight={weight}
      variant={variant}
      css={css}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

type ButtonStyleProps = Pick<ButtonProps, 'width' | 'height' | 'color' | 'textColor' | 'size' | 'weight' | 'variant'>;
type ButtonVariantStyles = Record<ButtonVariants, (color: ButtonStyleProps['color']) => RuleSet<object>>;

const buttonStyleTypeStyles: ButtonVariantStyles = {
  outlined: (color) => css`
    border: 1px solid ${({ theme }) => theme.colors[color ?? 'black']};
    background: transparent;
  `,
  filled: (color) => css`
    background-color: ${({ theme }) => theme.colors[color ?? 'black']};
  `,
  transparent: () => css`
    width: fit-content;
    background-color: transparent;
  `,
};

const ButtonContainer = styled.button<ButtonStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  color: ${({ theme, textColor }) => theme.textColors[textColor ?? 'default']};
  font-size: ${({ theme, size }) => theme.fontSizes[size ?? 'md']};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight ?? 'bold']};
  ${({ variant, color }) => buttonStyleTypeStyles[variant ?? 'filled'](color)};
`;
