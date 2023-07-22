import { forwardRef } from 'react';
import type { CSSProperties, ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  /**
   * Textarea 컴포넌트 사이즈 재조정 방향 설정입니다.
   */
  resize?: CSSProperties['resize'];
  /**
   * Textarea 컴포넌트 포커스 시 border 색상입니다.
   */
  focusBorderColor?: string;
}

const Textarea = ({ resize = 'both', focusBorderColor = theme.colors.primary, ref, ...props }: TextareaProps) => {
  return (
    <TextareaContainer
      ref={ref}
      focusBorderColor={focusBorderColor}
      resize={resize}
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck="false"
      {...props}
    />
  );
};

export default forwardRef(Textarea);

type TextareaStyleProps = Pick<TextareaProps, 'resize' | 'focusBorderColor'>;

const TextareaContainer = styled.textarea<TextareaStyleProps>`
  width: 100%;
  padding: 20px;
  border-radius: 0;
  background-color: ${({ theme }) => theme.backgroundColors.light};
  line-height: 1.5;
  resize: ${({ resize }) => resize};
  outline-color: ${({ focusBorderColor }) => focusBorderColor};
`;
