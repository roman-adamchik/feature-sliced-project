import {
  type ChangeEvent,
  memo,
  type InputHTMLAttributes,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  autofocus?: boolean
  readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readOnly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  }, [onChange]);

  const mods = {
    [cls.readOnly]: readOnly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder &&
        (<div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>)
      }
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={handleInputChange}
        className={cls.input}
        readOnly={readOnly}
        {...otherProps}
      />
    </div>
  );
});
