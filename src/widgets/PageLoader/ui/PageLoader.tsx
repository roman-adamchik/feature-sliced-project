import { type FC } from 'react';
import { Loader } from 'shared';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className = '' } = props;

  return (
    <div className={classNames(cls.pageloader, {}, [className])}>
      <Loader />
    </div>
  );
};
