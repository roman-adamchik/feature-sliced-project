import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
Article,
string | undefined,
ThunkConfig<string>
>(
  'article/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      if (!articleId) {
        throw new Error('Need article id to fetch the article');
      }

      const response = await extra.api.get<Article>('/articles/' + articleId, {
        params: {
          _expand: 'user',
        },
      });
      const article = response.data;

      if (!article) throw new Error();

      return article;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
