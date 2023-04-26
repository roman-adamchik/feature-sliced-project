import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { type CSSProperties, memo } from 'react';

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  borderRadius?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className = '',
    height,
    width,
    borderRadius,
  } = props;

  const style: CSSProperties = {
    height,
    width,
    borderRadius,
  };

  return (
    <div
      className={classNames(cls.skeleton, {}, [className])}
      style={style}
    />
  );
});
