import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Fragment, memo, type ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { type DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
  key: string
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  triggerElement: ReactNode
  direction?: DropdownDirection
}

export const Dropdown = memo((props: DropdownProps) => {
  const {
    className = '',
    items,
    triggerElement,
    direction = 'bottom right',
  } = props;

  const optionsMods: Mods = {
    [cls.optionsTopLeft]: direction === 'top left',
    [cls.optionsTopRight]: direction === 'top right',
    [cls.optionsBottomLeft]: direction === 'bottom left',
    [cls.optionsBottomRight]: direction === 'bottom right',
  };

  return (
    <Menu
      as='div'
      className={classNames(cls.dropdown, {}, [className])}
    >
    <Menu.Button
      className={cls.btn}
    >
      {triggerElement}
    </Menu.Button>
    <Menu.Items
      className={classNames(cls.menu, optionsMods)}
    >
      {items.map((item: DropdownItem) => {
        const content = ({ active }: { active: boolean }) => (
          <button
              type='button'
              className={classNames(cls.item, { [cls.active]: active })}
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
          <Menu.Item
            as={Fragment}
            key={item.key}
            disabled={item.disabled}
          >
            {content}
          </Menu.Item>
        );
      })}

    </Menu.Items>
  </Menu>
  );
});

Dropdown.displayName = 'Dropdown';
