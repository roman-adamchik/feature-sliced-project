import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type Article } from '../types/article';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.data = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice;
