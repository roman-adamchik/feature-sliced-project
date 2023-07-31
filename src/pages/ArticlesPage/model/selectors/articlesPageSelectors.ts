import { type StateSchema } from '@/app/providers/StoreProvider';
import {
  ArticleListViewType,
  ArticleSortField,
  ArticleType,
} from '@/entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleListViewType.TABLE;

export const getArticlesPageNumber = (state: StateSchema) =>
  state.articlesPage?.page || 1;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;

export const getArticlesPageInitialized = (state: StateSchema) =>
  state.articlesPage?._initialized;

export const getArticlesPageOrder = (state: StateSchema) =>
  state.articlesPage?.order ?? 'asc';

export const getArticlesPageSort = (state: StateSchema) =>
  state.articlesPage?.sort ?? ArticleSortField.CREATED;

export const getArticlesPageSearch = (state: StateSchema) =>
  state.articlesPage?.search ?? '';

export const getArticlesPageType = (state: StateSchema) =>
  state.articlesPage?.type ?? ArticleType.ALL;
