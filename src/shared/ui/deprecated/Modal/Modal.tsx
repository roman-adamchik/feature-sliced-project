import { type FC, type ReactNode } from 'react';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../redesigned/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';
import cls from './Modal.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

/**
 * Deprecated, use new components from redesigned folder
 * @deprecated
 */
export const Modal: FC<ModalProps> = (props) => {
  const {
    className = '',
    children = '',
    isOpen = false,
    onClose,
    lazy,
  } = props;
  const { theme } = useTheme();
  const { isClosing, isMounted, close } = useModal({ isOpen, onClose });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}
      >
        <Overlay onClick={close} className={cls.overlay} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};