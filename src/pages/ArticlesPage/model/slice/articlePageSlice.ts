import { LOCAL_STORAGE_ARTICLE_VIEW_TYPE } from '@/shared/const/localStorage';
import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { ArticleListViewType, ArticleSortField, ArticleType, type Article } from '@/entities/Article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { type ArticlePageSchema } from '../types/articlePageSchema';
import { type SortOrder } from '@/shared/types';

const articlesAdapter = createEntityAdapter<Article>();

const initialState = articlesAdapter.getInitialState<ArticlePageSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  view: ArticleListViewType.TABLE,
  hasMore: true,
  page: 1,
  _initialized: false,
  limit: 9,
  order: 'asc',
  search: '',
  sort: ArticleSortField.CREATED,
  type: ArticleType.ALL,
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
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const localStorageData = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW_TYPE);
      const view = localStorageData
        ? JSON.parse(localStorageData) as ArticleListViewType
        : ArticleListViewType.TABLE;
      state.view = view;
      state.limit = view === ArticleListViewType.LIST ? 4 : 9;
      state._initialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
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
