import { useTheme } from 'app/providers/ThemeProvider';
import {
  type FC,
  type ReactNode,
  type MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className = '',
    children = '',
    isOpen = false,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const modalRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const closeHandler = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      modalRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick = (e: MouseEvent): void => {
    e.stopPropagation();
  };

  const keyDownHandler = useCallback((e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

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

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <div
        className={cls.overlay}
        onClick={closeHandler}
        >
          <div
          className={cls.content}
          onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
