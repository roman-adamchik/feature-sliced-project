import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
Article[],
undefined,
ThunkConfig<string>
>(
  'articleCommentList/fetchCommentsByArticleId',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
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
