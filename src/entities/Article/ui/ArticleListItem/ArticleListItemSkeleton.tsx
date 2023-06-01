import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleListViewType } from '../../model/consts/consts';

interface ArticleListItemSkeletonProps {
  className?: string
  view?: ArticleListViewType
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className = '',
    view = ArticleListViewType.TABLE,
  } = props;

  if (view === ArticleListViewType.LIST) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton borderRadius='50%' height={30} width={30}/>
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36}/>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton
            className={cls.img}
            width={200}
            height={200}
          />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton
            className={cls.types}
            width={130}
            height={16}
          />
        </div>
        <Skeleton
            className={cls.title}
            width={150}
            height={16}
        />
      </Card>
    </div>
  );
});

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
