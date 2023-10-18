import { useCallback, useRef, useState } from 'react';

export const useBottomSheet = () => {
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const closeAnimated = useCallback(() => {
    setIsClosing(true);

    const timer = setTimeout(() => {
      setIsClosing(false);
    }, 370);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenBottomSheet = () => {
    setIsClosing(false);
  };

  const handleCloseBottomSheet = () => {
    closeAnimated();
  };

  return { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet };
};
