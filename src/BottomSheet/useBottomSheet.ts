import { useCallback, useRef, useState } from 'react';
import { useToastActionContext } from '../Toast';

export const useBottomSheet = () => {
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  const { setToastId } = useToastActionContext();

  const closeAnimated = useCallback(() => {
    setIsClosing(true);

    const timer = setTimeout(() => {
      setIsClosing(false);
      ref.current?.close();
    }, 370);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenBottomSheet = () => {
    setToastId('toast-in-dialog-container');
    ref.current?.showModal();
  };

  const handleCloseBottomSheet = () => {
    setToastId('toast-container');
    closeAnimated();
  };

  return { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet };
};
