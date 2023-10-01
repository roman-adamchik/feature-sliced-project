import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { memo } from 'react';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ArticleListViewType } from '../../../model/consts/consts';
import { ArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';

export const ArticleListItemSkeletonDeprecated = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className = '', view = ArticleListViewType.TABLE } = props;

    if (view === ArticleListViewType.LIST) {
      return (
        <div className={classNames('', {}, [className, cls[view]])}>
          <CardDeprecated className={cls.card}>
            <div className={cls.header}>
              <SkeletonDeprecated borderRadius="50%" height={30} width={30} />
              <SkeletonDeprecated
                width={150}
                height={16}
                className={cls.username}
              />
              <SkeletonDeprecated
                width={150}
                height={16}
                className={cls.date}
              />
            </div>
            <SkeletonDeprecated width={250} height={24} className={cls.title} />
            <SkeletonDeprecated height={200} className={cls.img} />
            <div className={cls.footer}>
              <SkeletonDeprecated width={200} height={36} />
            </div>
          </CardDeprecated>
        </div>
      );
    }

    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <CardDeprecated className={cls.card}>
          <div className={cls.imageWrapper}>
            <SkeletonDeprecated className={cls.img} width={200} height={200} />
          </div>
          <div className={cls.infoWrapper}>
            <SkeletonDeprecated className={cls.types} width={130} height={16} />
          </div>
          <SkeletonDeprecated className={cls.title} width={150} height={16} />
        </CardDeprecated>
      </div>
    );
  },
);

ArticleListItemSkeletonDeprecated.displayName = 'ArticleListItemSkeleton';
