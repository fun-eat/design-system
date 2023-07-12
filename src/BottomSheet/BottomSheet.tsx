import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import { slideUp } from '@styles/animations';

interface BottomSheetProps extends ComponentPropsWithRef<'dialog'> {
  close: () => void;
}

const BottomSheet = ({ children, close, ...props }: BottomSheetProps, ref: ForwardedRef<HTMLDialogElement>) => {
  return createPortal(
    <ModalDialog ref={ref} {...props}>
      <BackDrop onClick={close} />
      <ModalWrapper>{children}</ModalWrapper>
    </ModalDialog>,
    document.body
  );
};

export default forwardRef(BottomSheet);

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

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 12px;
  border-radius: 12px 12px 0px 0px;
  background: ${({ theme }) => theme.colors.white};
  animation: ${slideUp} 0.5s;
`;
