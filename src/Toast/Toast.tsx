import styled from 'styled-components';

import useToast from './useToast';
import { fadeOut, slideIn } from '../styles/animations';
import theme from '../styles/theme';
import Text from '../Text';

export interface ToastProps {
  id: number;
  message: string;
  isError?: boolean;
}

const Toast = ({ id, message, isError = false }: ToastProps) => {
  const isShown = useToast(id);

  return (
    <ToastWrapper isError={isError} isAnimating={isShown}>
      <Message color={theme.colors.white}>{message}</Message>
    </ToastWrapper>
  );
};

export default Toast;

type ToastStyleProps = Pick<ToastProps, 'isError'> & { isAnimating?: boolean };

const ToastWrapper = styled.div<ToastStyleProps>`
  position: relative;
  width: calc(100% - 20px);
  height: 55px;
  max-width: 560px;
  border-radius: 10px;
  background: ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.black)};
  animation: ${({ isAnimating }) => (isAnimating ? slideIn : fadeOut)} 0.3s ease-in-out forwards;
`;

const Message = styled(Text)`
  margin-left: 20px;
  line-height: 55px;
`;
