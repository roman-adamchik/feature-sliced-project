import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'left' | 'center' | 'right';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';
type SizesType = 'size_s' | 'size_m' | 'size_l';

const mapSizeToText: Record<TextSize, SizesType> = {
  s: 'size_s',
  m: 'size_m',
  l: 'size_l',
};

const mapSizeToHeaderText: Record<TextSize, HeaderTagType> = {
  s: 'h1',
  m: 'h2',
  l: 'h3',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    variant = 'primary',
    align = 'left',
    size = 'm',
    'data-testid': dataTestId = 'Text',
  } = props;

  const sizeClassName = mapSizeToText[size];
  const HeaderTag = mapSizeToHeaderText[size];

  const additionalClasses = [
    className,
    cls[variant],
    cls[align],
    cls[sizeClassName],
  ];

  return (
    <div className={classNames(cls.text, {}, additionalClasses)}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
});

Text.displayName = 'Text';
