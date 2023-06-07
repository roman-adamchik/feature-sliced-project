import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilter.module.scss';
import { memo, useCallback } from 'react';
import { type ArticleListViewType, type ArticleSortField, type ArticleType } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import { useSelector } from 'react-redux';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { type SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { type TabItem } from '@/shared/ui/Tabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFilterProps {
  className?: string
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    void dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const handleViewClick = useCallback((view: ArticleListViewType) => {
    dispatch(articlePageActions.setView(view));
  }, [dispatch]);

  const handleSortChange = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleOrderChange = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleSearchChange = useCallback((newSearch: string) => {
    dispatch(articlePageActions.setSearch(newSearch));
    dispatch(articlePageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const handleTypeChange = useCallback((tab: TabItem<ArticleType>) => {
    const { value: newType } = tab;
    dispatch(articlePageActions.setType(newType));
    dispatch(articlePageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.articlesPageFilter, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onSortChange={handleSortChange}
          onOrderChange={handleOrderChange}
        />
        <ArticleViewSelector
          view={view}
          handleViewClick={handleViewClick}
        />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Search')}
          value={search}
          onChange={handleSearchChange}
        />
      </Card>
      <ArticleTypeTabs
        type={type}
        handleTypeChange={handleTypeChange}
        className={cls.tabs}
      />
    </div>
  );
});

ArticlesPageFilter.displayName = 'ArticlesPageFilter';
