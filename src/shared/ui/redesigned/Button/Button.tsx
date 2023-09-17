import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
  'data-testid'?: string;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className = '',
    children,
    variant = 'outline',
    square = false,
    size = 'm',
    fullWidth = false,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
  };

  const additionalClasses = [className, cls[variant], cls[size]];

  return (
    <button
      className={classNames(cls.button, mods, additionalClasses)}
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
