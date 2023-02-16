import { type FC } from 'react';
import { Loader, classNames } from 'shared';
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
