import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticleList {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticleList,
ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const {
      page = 1,
    } = props;
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });
      const articles = response.data;

      if (!articles) throw new Error();

      return articles;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
