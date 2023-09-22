import { ArticleListViewType, ArticleSortField, ArticleType } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "@/shared/types/sort";
import { TabItem } from "@/shared/ui/deprecated/Tabs";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlePageActions } from "../../model/slice/articlePageSlice";

export function useArticleFilters() {
  const dispatch = useAppDispatch();

  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);
  const view = useSelector(getArticlesPageView);


  const fetchData = useCallback(() => {
    void dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);


  const handleViewClick = useCallback(
    (view: ArticleListViewType) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch],
  );

  const handleSortChange = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleOrderChange = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      dispatch(articlePageActions.setSearch(newSearch));
      dispatch(articlePageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const handleTypeChange = useCallback(
    (tab: TabItem<ArticleType>) => {
      const { value: newType } = tab;
      dispatch(articlePageActions.setType(newType));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return {
    sort,
    order,
    search,
    type,
    view,
    handleSortChange,
    handleOrderChange,
    handleSearchChange,
    handleTypeChange,
    handleViewClick,
  };
}