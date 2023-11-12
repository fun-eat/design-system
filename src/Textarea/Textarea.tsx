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
  error: string;
}

const Textarea = ({ resize = 'both', error, ref, ...props }: TextareaProps) => {
  return (
    <>
      <TextareaContainer
        ref={ref}
        resize={resize}
        error={error}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        {...props}
      />
      <Text size="xs" color={theme.colors.error} aria-live="assertive">
        {error}
      </Text>
    </>
  );
};

export default forwardRef(Textarea);

type TextareaStyleProps = Pick<TextareaProps, 'resize'> & {
  error: string;
};

const TextareaContainer = styled.textarea<TextareaStyleProps>`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColors.light};
  border: 1px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: 0;
  line-height: 1.5;
  resize: ${({ resize }) => resize};
  outline-color: ${({ error, theme }) => (error ? theme.colors.error : theme.colors.primary)};

  &::placeholder {
    color: ${({ theme }) => theme.textColors.disabled};
  }
`;
