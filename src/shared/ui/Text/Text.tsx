import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize

  'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

export const mapSizeToHeaderText: Record<TextSize, HeaderTagType> = {
  [TextSize.L]: 'h1',
  [TextSize.M]: 'h2',
  [TextSize.S]: 'h3',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderText[size];

  const additionalClasses = [
    className,
    cls[theme],
    cls[align],
    cls[size],
  ];

  return (
    <div className={classNames(cls.textWrapper, { }, additionalClasses)}>
      {title && <HeaderTag className={cls.title} data-testid={`${dataTestId}.header`}>{title}</HeaderTag>}
      {text && <p className={cls.text} data-testid={`${dataTestId}.paragraph`}>{text}</p>}
    </div>
  );
});

Text.displayName = 'Text';
