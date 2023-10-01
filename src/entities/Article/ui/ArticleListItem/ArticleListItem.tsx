import { memo, type HTMLAttributeAnchorTarget } from 'react';
import { type Article } from '../../model/types/article';
import { ArticleListViewType } from '../../model/consts/consts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemRedesigned } from './redesigned/ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from './deprecated/ArticleListItemDeprecated';

export interface ArticleListItemProps {
  className?: string;
  article?: Article;
  view: ArticleListViewType;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  return (
    <ToggleFeatures
      feature="isNewDesign"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  );
});

ArticleListItem.displayName = 'ArticleListItem';
