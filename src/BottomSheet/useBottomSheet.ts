import type { KeyboardEventHandler } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useBottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const closeAnimated = useCallback(() => {
    setIsClosing(true);

    const timer = setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 370);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenBottomSheet = () => {
    setIsOpen(true);
  };

  const handleCloseBottomSheet = () => {
    closeAnimated();
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      handleCloseBottomSheet();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return { ref, isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet };
};
