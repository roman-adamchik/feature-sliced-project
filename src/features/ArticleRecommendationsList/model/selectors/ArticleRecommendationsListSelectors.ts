import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticlerecommendationsListLoading = (state: StateSchema) => {
  return state.articlerecommendationsList?.isLoading;
};

export const getArticlerecommendationsListError = (state: StateSchema) => {
  return state.articlerecommendationsList?.error;
};
