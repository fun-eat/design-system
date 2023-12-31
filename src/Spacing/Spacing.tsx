import type { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';
import type { RuleSet } from 'styled-components';

type SpacingDirections = 'vertical' | 'horizontal';

export interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Spacing 컴포넌트의 방향입니다.
   */
  direction?: SpacingDirections;
  /**
   * Spacing 컴포넌트의 크기입니다.
   */
  size: number;
}

const Spacing = ({ direction = 'vertical', size, ...props }: SpacingProps) => {
  return <SpacingContainer aria-hidden="true" direction={direction} size={size} {...props} />;
};

export default Spacing;

type SpacingStyleProps = Pick<SpacingProps, 'direction' | 'size'>;
type SpacingSizeFunction = (size: SpacingStyleProps['size']) => RuleSet<object>;

const spacingDirectionStyle: Record<SpacingDirections, SpacingSizeFunction> = {
  vertical: (size) => css`
    height: ${size}px;
  `,
  horizontal: (size) => css`
    width: ${size}px;
  `,
};

const SpacingContainer = styled.div<SpacingStyleProps>`
  ${({ direction, size }) => spacingDirectionStyle[direction ?? 'vertical'](size)}
`;
