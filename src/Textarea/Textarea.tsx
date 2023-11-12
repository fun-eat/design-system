import { forwardRef } from 'react';
import type { CSSProperties, ComponentPropsWithRef } from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import Text from '../Text/Text';

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  /**
   * Textarea 컴포넌트 사이즈 재조정 방향 설정입니다.
   */
  resize?: CSSProperties['resize'];
  /**
   * Textarea 컴포넌트의 에러 메시지입니다.
   */
  errorMessage?: string;
}

const Textarea = ({ resize = 'both', errorMessage, ref, ...props }: TextareaProps) => {
  return (
    <>
      <TextareaContainer
        ref={ref}
        resize={resize}
        errorMessage={errorMessage}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        {...props}
      />
      <Text size="xs" color={theme.colors.error} aria-live="assertive">
        {errorMessage}
      </Text>
    </>
  );
};

export default forwardRef(Textarea);

type TextareaStyleProps = Pick<TextareaProps, 'resize'> & {
  errorMessage?: string;
};

const TextareaContainer = styled.textarea<TextareaStyleProps>`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColors.light};
  border: 1px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: 0;
  line-height: 1.5;
  resize: ${({ resize }) => resize};
  outline-color: ${({ errorMessage, theme }) => (errorMessage ? theme.colors.error : theme.colors.primary)};

  &::placeholder {
    color: ${({ theme }) => theme.textColors.disabled};
  }
`;
