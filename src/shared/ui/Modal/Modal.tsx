import { useTheme } from 'app/providers/ThemeProvider';
import {
  type FC,
  type ReactNode,
} from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

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
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <Overlay onClick={close} className={cls.overlay}/>
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
