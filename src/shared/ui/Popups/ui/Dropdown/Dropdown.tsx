import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import clsPopup from '../../styles/popup.module.scss';
import { Fragment, memo, type ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { type DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';

export interface DropdownItem {
  key: string;
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  triggerElement: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
  const {
    className = '',
    items,
    triggerElement,
    direction = 'bottom right',
  } = props;

  return (
    <Menu as="div" className={classNames('', {}, [className, clsPopup.popup])}>
      <Menu.Button className={clsPopup.trigger}>{triggerElement}</Menu.Button>
      <Menu.Items
        className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}
      >
        {items.map((item: DropdownItem) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              className={classNames(cls.item, { [clsPopup.active]: active })}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                key={item.key}
                disabled={item.disabled}
                to={item.href}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={item.key} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});

Dropdown.displayName = 'Dropdown';
