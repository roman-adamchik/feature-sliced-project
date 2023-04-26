import { type CSSProperties, useMemo } from 'react';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar = (props: AvatarProps) => {
  const {
    className = '',
    src,
    alt,
    size = 100,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const mods: Mods = {};

  return (
    <img
      className={classNames(cls.avatar, mods, [className])}
      src={src}
      alt={alt}
      style={style}
    />
  );
};
