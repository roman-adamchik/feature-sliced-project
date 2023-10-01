import { memo } from 'react';
import { ArticleListViewType } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemSkeletonRedesigned } from './redesigned/ArticleListItemSkeletonRedesigned';
import { ArticleListItemSkeletonDeprecated } from './deprecated/ArticleListItemSkeletonDeprecated';

export interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleListViewType;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    return (
      <ToggleFeatures
        feature="isNewDesign"
        on={<ArticleListItemSkeletonRedesigned {...props} />}
        off={<ArticleListItemSkeletonDeprecated {...props} />}
      />
    );
  },
);

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
