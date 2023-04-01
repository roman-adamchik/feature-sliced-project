import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsListLoading = (state: StateSchema) => {
  return state.articleRecommendationsList?.isLoading;
};

export const getArticleRecommendationsListError = (state: StateSchema) => {
  return state.articleRecommendationsList?.error;
};
