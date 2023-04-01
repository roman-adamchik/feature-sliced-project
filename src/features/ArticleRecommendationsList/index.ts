import { type ArticleRecommendationsListSchema } from './model/types/articleRecommendationsListSchema';
import { articleRecommendationsListReducer } from './model/slices/articleRecommendationsListSlice';
import { ArticleRecommendationsList } from './ui/ArticleRecomendationsList/ArticleRecommendationsList';

export {
  articleRecommendationsListReducer,
  type ArticleRecommendationsListSchema,
  ArticleRecommendationsList,
};
