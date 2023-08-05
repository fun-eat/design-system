import { useCallback, useRef, useState } from 'react';

export const useBottomSheet = () => {
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  const closeAnimated = useCallback(() => {
    setIsClosing(true);

    const timer = setTimeout(() => {
      setIsClosing(false);
      ref.current?.close();
    }, 370);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenBottomSheet = () => {
    ref.current?.showModal();
  };

  const handleCloseBottomSheet = () => {
    closeAnimated();
  };

  return { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet };
};
