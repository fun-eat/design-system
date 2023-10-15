import type { ComponentPropsWithoutRef } from 'react';
import type { Link as RouterLink, NavLink, LinkProps as RouterLinkProps, NavLinkProps } from 'react-router-dom';
import type { CSSProp } from 'styled-components';
import styled from 'styled-components';

type LinkElement = 'a' | typeof RouterLink | typeof NavLink;
type LinkAttributes<T extends LinkElement> = T extends typeof RouterLink
  ? RouterLinkProps
  : T extends typeof NavLink
  ? NavLinkProps
  : ComponentPropsWithoutRef<'a'>;

export interface LinkStyleProps extends ComponentPropsWithoutRef<'a'> {
  /**
   * Link 컴포넌트의 링크 클릭 시 새로운 탭으로 열도록 선택할 수 있습니다.
   */
  isExternal?: boolean;
  /**
   * Link 컴포넌트의 디스플레이 속성이 block인지 선택할 수 있습니다.
   */
  block?: boolean;
  /**
   * Link 컴포넌트에 적용할 CSS 스타일입니다.
   */
  css?: CSSProp;
}

export type LinkProps<T extends LinkElement> = LinkAttributes<T> & LinkStyleProps & { as?: T };

const Link = <T extends LinkElement = 'a'>({ children, isExternal = false, block = false, ...props }: LinkProps<T>) => {
  return (
    <LinkContainer
      block={block}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      {...props}
    >
      {children}
    </LinkContainer>
  );
};

export default Link;

const LinkContainer = styled.a<LinkStyleProps>`
  display: ${({ block }) => (block ? 'block' : undefined)};
  ${({ css }) => css}
`;
