import { type StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) =>
  state.articleDetails?.data;
export const getArticleDetailsError = (state: StateSchema) =>
  state.articleDetails?.error;
export const getArticleDetailsIsLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading;
