import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { type HTMLAttributes, type ReactNode } from 'react';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  'data-testid'?: string;
}

/**
 * Deprecated, use new components from redesigned folder
 * @deprecated
 */
export const Card = (props: CardProps) => {
  const {
    className = '',
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
