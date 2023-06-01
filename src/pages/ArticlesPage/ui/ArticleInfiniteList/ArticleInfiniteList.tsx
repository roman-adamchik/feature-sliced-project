import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlePageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  if (error) {
    return <Text text={t('Error loading article list')}/>;
  }

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
      className={className}
    />
  );
});

ArticleInfiniteList.displayName = 'ArticleInfiniteList';
