import { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { slideUp } from '../styles/animations';

export interface BottomSheetProps extends ComponentPropsWithRef<'dialog'> {
  maxWidth: number;
  close: () => void;
}

const BottomSheet = (
  { maxWidth, close, children, ...props }: BottomSheetProps,
  ref: ForwardedRef<HTMLDialogElement>
) => {
  return createPortal(
    <ModalDialog ref={ref} {...props}>
      <BackDrop onClick={close} />
      <ModalWrapper maxWidth={maxWidth}>{children}</ModalWrapper>
    </ModalDialog>,
    document.body
  );
};

export default forwardRef(BottomSheet);

type ModalWrapperStyleProps = Pick<BottomSheetProps, 'maxWidth'>;

const ModalDialog = styled.dialog`
  border: none;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.colors.gray5};
  opacity: 0.3;
`;

const ModalWrapper = styled.div<ModalWrapperStyleProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${({ maxWidth }) => maxWidth}px;
  height: fit-content;
  padding: 12px;
  border-radius: 12px 12px 0px 0px;
  background: ${({ theme }) => theme.colors.white};
  animation: ${slideUp} 0.5s;
`;
