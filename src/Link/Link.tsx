import type { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  /**
   * Link 컴포넌트의 링크 클릭 시 새로운 탭으로 열도록 선택할 수 있습니다.
   */
  isExternal?: boolean;
  /**
   * Link 컴포넌트의 디스플레이 속성이 block인지 선택할 수 있습니다.
   */
  block?: boolean;
}

const Link = ({ children, isExternal = false, block = false, css, ...props }: LinkProps) => {
  return (
    <LinkContainer
      block={block}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      css={css}
      {...props}
    >
      {children}
    </LinkContainer>
  );
};

export default Link;

type LinkStyleProps = Pick<LinkProps, 'block'>;

const LinkContainer = styled.a<LinkStyleProps>`
  display: ${({ block }) => (block ? 'block' : undefined)};
`;
