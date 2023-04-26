import { addCommentFormActions } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Comment } from '@/entities/Comment';
import { getArticleDetailsData } from '@/entities/Article';

export const sendCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'addCommentForm/sendCommentForArticle',
  async (text, thunkAPI) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkAPI;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });
      const comment = response.data;

      if (!comment) throw new Error();

      dispatch(addCommentFormActions.setText(''));

      return comment;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
