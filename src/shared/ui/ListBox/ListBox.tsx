import cls from './ListBox.module.scss';
import { Fragment, type ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';

interface ListBoxItem {
  value: string
  content: ReactNode
  unavailable?: boolean
}

type DropdownDirection = 'top' | 'bottom';

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
    direction = 'bottom',
    label,
  } = props;

  const optionsMods: Mods = {
    [cls.optionsTop]: direction === 'top',
  };

  return (
    <HStack gap='4'>
      {label && <span className={classNames(cls.label, { [cls.disabled]: readonly })}>{`${label}>`}</span>}
      <HListBox
        as='div'
        className={classNames(cls.listBox, {}, [className])}
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
        <HListBox.Options className={classNames(cls.options, optionsMods)}>
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
                      [cls.active]: active,
                      [cls.disabled]: disabled,
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
