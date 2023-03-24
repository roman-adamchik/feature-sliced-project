import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { type HTMLAttributes, type ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = (props: CardProps) => {
  const {
    className = '',
    children,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
