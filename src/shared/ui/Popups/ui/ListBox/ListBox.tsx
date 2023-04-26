import cls from './ListBox.module.scss';
import clsPopup from '../../styles/popup.module.scss';
import { Fragment, type ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { type DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

export interface ListBoxItem {
  value: string
  content: ReactNode
  unavailable?: boolean
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  onChange?: <T extends string>(value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

export const ListBox = (props: ListBoxProps) => {
  const {
    className = '',
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  return (
    <HStack gap='4'>
      {label && (
        <span
          className={classNames(cls.label, { [clsPopup.disabled]: readonly })}
        >
          {`${label}>`}
        </span>
      )}
      <HListBox
        as='div'
        className={classNames('', {}, [className, clsPopup.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button
          className={cls.trigger}
        >
          <Button
            theme={ButtonTheme.OUTLINE}
            disabled={readonly}
          >
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.unavailable}
            >
              {({ active, disabled, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [clsPopup.active]: active,
                      [clsPopup.disabled]: disabled,
                    },
                  )}
                >
                  {selected && '!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
