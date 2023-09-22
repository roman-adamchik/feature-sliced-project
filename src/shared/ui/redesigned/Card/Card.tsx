import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'normal' | 'rounded';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

type GapClasses = 'gap_0' | 'gap_8' | 'gap_16' | 'gap_24';
type BorderClasses = 'borderNormal' | 'borderRounded';

const mapPaddingToClass: Record<CardPadding, GapClasses> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

const mapBorderToClass: Record<CardBorder, BorderClasses> = {
  normal: 'borderNormal',
  rounded: 'borderRounded',
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    border = 'normal',
    ...otherProps
  } = props;

  const paddingClass = mapPaddingToClass[padding];
  const borderClass = mapBorderToClass[border];

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[borderClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
