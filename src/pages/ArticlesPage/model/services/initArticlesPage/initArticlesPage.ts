import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type ArticleType, type ArticleSortField } from '@/entities/Article';
import { type SortOrder } from '@/shared/types/sort';
import { getArticlesPageInitialized } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const isInitialized = getArticlesPageInitialized(getState());
  const search = searchParams.get('search');
  const order = searchParams.get('order') as SortOrder;
  const sort = searchParams.get('sort') as ArticleSortField;
  const type = searchParams.get('type') as ArticleType;

  if (search) dispatch(articlePageActions.setSearch(search));
  if (order) dispatch(articlePageActions.setOrder(order));
  if (sort) dispatch(articlePageActions.setSort(sort));
  if (type) dispatch(articlePageActions.setType(type));

  if (!isInitialized) {
    dispatch(articlePageActions.initState());
    void dispatch(fetchArticlesList({}));
  }
});
