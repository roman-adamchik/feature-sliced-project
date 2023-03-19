import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { type ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';

const commentsAdapter = createEntityAdapter<Comment>();

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    ids: [],
    entities: {},
    error: undefined,
    isLoading: false,
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        commentsAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articleDetailsCommentsActions,
  reducer: articleDetailsCommentsReducer,
} = articleDetailsCommentsSlice;
