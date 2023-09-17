import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className = '' } = props;

  return (
    <div className={classNames(cls.pageloader, {}, [className])}>
      <Loader />
    </div>
  );
});
