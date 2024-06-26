import { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { slideDown, slideUp } from '../styles/animations';

export interface BottomSheetProps extends ComponentPropsWithRef<'div'> {
  maxWidth?: string;
  isOpen: boolean;
  isClosing: boolean;
  close: () => void;
}

const containerElement =
  window.location.port === '6006' ? document.body : (document.getElementById('dialog-container') as HTMLElement);

const BottomSheet = (
  { maxWidth, isOpen, isClosing, close, children, ...props }: BottomSheetProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return createPortal(
    <>
      {isOpen && (
        <ModalDialog role="dialog" ref={ref} {...props}>
          <BackDrop onClick={close} />
          <ModalWrapper maxWidth={maxWidth} isClosing={isClosing}>
            {children}
          </ModalWrapper>
        </ModalDialog>
      )}
    </>,
    containerElement
  );
};

export default forwardRef(BottomSheet);

type ModalWrapperStyleProps = Pick<BottomSheetProps, 'maxWidth'> & {
  isClosing: boolean;
};

const ModalDialog = styled.div`
  position: relative;
  border: none;
  z-index: 9999;
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
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: 100%;
  border-radius: 12px 12px 0px 0px;
  background: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  animation: ${({ isClosing }) => (isClosing ? slideDown : slideUp)} 0.5s;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: ${({ maxWidth }) => maxWidth}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
