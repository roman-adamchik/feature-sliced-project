import {
  useCallback,
  type SelectHTMLAttributes,
  type ChangeEvent,
  useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> extends HTMLSelectProps {
  className?: string
  readOnly?: boolean
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className = '',
    readOnly,
    placeholder,
    options,
    value,
    onChange,
  } = props;

  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  }, [onChange]);

  const optionsList = useMemo(() => {
    return options?.map(({ value, content }) => (
      <option
        className={cls.option}
        value={value}
        key={value}
      >
        {content}
      </option>
    ));
  }, [options]);

  const mods = {
    [cls.readOnly]: readOnly,
  };

  return (
    <div className={classNames(cls.selectWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <select
        className={cls.select}
        onChange={handleChange}
        value={value}
        disabled={readOnly}
      >
        {optionsList}
      </select>
    </div>
  );
};
