import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesViewSelectorContainerProps {
  className?: string;
}

export const ArticlesViewSelectorContainer = memo(
  (props: ArticlesViewSelectorContainerProps) => {
    const { className = '' } = props;

    const { view, handleViewClick } = useArticleFilters();

    return (
      <ArticleViewSelector
        className={className}
        view={view}
        handleViewClick={handleViewClick}
      />
    );
  },
);

ArticlesViewSelectorContainer.displayName = 'ArticlesViewSelectorContainer';
