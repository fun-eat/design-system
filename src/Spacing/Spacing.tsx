import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

export interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  direction: 'vertical' | 'horizontal';
  size: number;
}

const Spacing = ({ direction, size, ...props }: SpacingProps) => {
  return <SpacingContainer aria-hidden="true" direction={direction} size={size} {...props} />;
};

export default Spacing;

const SpacingContainer = styled.div<SpacingProps>`
  width: ${({ direction, size }) => (direction === 'horizontal' ? `${size}px` : undefined)};
  height: ${({ direction, size }) => (direction === 'vertical' ? `${size}px` : undefined)};
`;
