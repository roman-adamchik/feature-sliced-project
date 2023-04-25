import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
  isOpen?: boolean
  animationDelay?: number
  onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const useModal = (props: UseModalProps) => {
  const {
    isOpen,
    animationDelay = ANIMATION_DELAY,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const modalRef = useRef<ReturnType<typeof setTimeout>>();

  const close = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      modalRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const keyDownHandler = useCallback((e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      clearInterval(modalRef.current);
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [isOpen, keyDownHandler]);

  return {
    isClosing,
    isMounted,
    close,
  };
};
