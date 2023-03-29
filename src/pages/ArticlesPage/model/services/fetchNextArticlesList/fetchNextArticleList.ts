import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNumber } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticleList = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
  'articlesPage/fetchNextArticleList',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const hasMore = getArticlesPageHasMore(getState());
    const isLoading = getArticlesPageIsLoading(getState());
    const page = getArticlesPageNumber(getState());

    if (hasMore && !isLoading) {
      const newPage = page + 1;
      dispatch(articlePageActions.setPage(newPage));
      void dispatch(fetchArticlesList({}));
    }
  },
);
