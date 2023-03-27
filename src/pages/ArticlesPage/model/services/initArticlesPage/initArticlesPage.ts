import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInitialized } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const isInitialized = getArticlesPageInitialized(getState());

    if (!isInitialized) {
      dispatch(articlePageActions.initState());
      void dispatch(fetchArticlesList({ page: 1 }));
    }
  },
);
