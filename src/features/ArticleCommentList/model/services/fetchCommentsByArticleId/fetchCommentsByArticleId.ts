import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleCommentList/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    if (!articleId) {
      rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });
      const comments = response.data;

      if (!comments) throw new Error();

      return comments;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
