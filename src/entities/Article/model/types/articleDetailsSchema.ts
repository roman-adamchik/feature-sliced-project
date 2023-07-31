import { type Article } from './article';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
