import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { type CSSProperties, memo } from 'react';
import imagePlaceholderSrc from '@/shared/assets/images/no_image.jpg';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  isNoImage?: boolean;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className = '',
    height,
    width,
    borderRadius,
    isNoImage = false,
  } = props;

  const style: CSSProperties = {
    height,
    width,
    borderRadius,
    backgroundImage: isNoImage
      ? `url(${imagePlaceholderSrc as string})`
      : 'none',
  };

  return (
    <div
      className={classNames(cls.skeleton, { [cls.isNoImage]: isNoImage }, [
        className,
      ])}
      style={style}
    />
  );
});
