import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_NEGATIVE = 'outlineNegative',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
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
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    fullWidth = false,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
  };

  const additionalClasses = [className, cls[theme], cls[size]];

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
