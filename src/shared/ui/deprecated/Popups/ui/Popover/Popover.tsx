import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import clsPopup from '../../styles/popup.module.scss';
import { type ReactNode } from 'react';
import { type DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
  className?: string;
  triggerElement: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

/**
 * Deprecated, use new components from redesigned folder
 * @deprecated
 */
export const Popover = (props: PopoverProps) => {
  const {
    className = '',
    triggerElement,
    direction = 'bottom right',
    children,
  } = props;

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, clsPopup.popup])}
    >
      <HPopover.Button as="div" className={clsPopup.trigger}>
        {triggerElement}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
