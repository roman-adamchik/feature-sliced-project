import {
  memo,
  useCallback,
  type SelectHTMLAttributes,
  type ChangeEvent,
  useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps extends HTMLSelectProps {
  className?: string
  readOnly?: boolean
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const {
    className = '',
    readOnly,
    placeholder,
    options,
    value,
    onChange,
  } = props;

  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
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
});
