import { LOCAL_STORAGE_ARTICLE_VIEW_TYPE } from './../../../../shared/const/localStorage';
import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleListViewType, type Article } from 'entities/Article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { type ArticlePageSchema } from '../types/articlePageSchema';

const articlesAdapter = createEntityAdapter<Article>();

const initialState = articlesAdapter.getInitialState<ArticlePageSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  view: ArticleListViewType.TABLE,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleListViewType>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_TYPE, JSON.stringify(action.payload));
    },
    initState: (state) => {
      const localStorageData = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_TYPE);
      state.view = localStorageData
        ? JSON.parse(localStorageData) as ArticleListViewType
        : ArticleListViewType.TABLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        articlesAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articlePageActions,
  reducer: articlePageReducer,
} = articlePageSlice;
