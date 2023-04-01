import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticlerecommendations';
import { type ArticlerecommendationsListSchema } from '../types/articlerecommendationsListSchema';

const articlesrecommendationsAdapter = createEntityAdapter<Article>();

const initialState = articlesrecommendationsAdapter.getInitialState<ArticlerecommendationsListSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
});

export const getArticlesrecommendations = articlesrecommendationsAdapter.getSelectors(
  (state: StateSchema) => state.articlerecommendationsList || articlesrecommendationsAdapter.getInitialState(),
);

export const articlerecommendationsListSlice = createSlice({
  name: 'articlerecommendationsList',
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
  actions: articlerecommendationsListActions,
  reducer: articlerecommendationsListReducer,
} = articlerecommendationsListSlice;
