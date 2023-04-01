import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations';
import { type ArticleRecommendationsListSchema } from '../types/articleRecommendationsListSchema';

const articlesrecommendationsAdapter = createEntityAdapter<Article>();

const initialState = articlesrecommendationsAdapter.getInitialState<ArticleRecommendationsListSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
});

export const getArticlesrecommendations = articlesrecommendationsAdapter.getSelectors(
  (state: StateSchema) =>
    state.articleRecommendationsList ||
    articlesrecommendationsAdapter.getInitialState(),
);

export const articleRecommendationsListSlice = createSlice({
  name: 'articleRecommendationsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        articlesrecommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articleRecommendationsListActions,
  reducer: articleRecommendationsListReducer,
} = articleRecommendationsListSlice;
