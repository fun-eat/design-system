import { forwardRef } from 'react';
import type { CSSProperties, ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  /**
   * Textarea 컴포넌트 사이즈 재조정 방향 설정입니다.
   */
  resize?: CSSProperties['resize'];
}

const Textarea = ({ resize = 'both', ref, ...props }: TextareaProps) => {
  return (
    <TextareaContainer ref={ref} resize={resize} autoCapitalize="off" autoCorrect="off" spellCheck="false" {...props} />
  );
};

export default forwardRef(Textarea);

type TextareaStyleProps = Pick<TextareaProps, 'resize'>;

const TextareaContainer = styled.textarea<TextareaStyleProps>`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColors.light};
  border: 1px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: 0;
  line-height: 1.5;
  resize: ${({ resize }) => resize};
  outline-color: ${({ theme }) => theme.colors.primary};

  &::placeholder {
    color: ${({ theme }) => theme.textColors.disabled};
  }
`;
