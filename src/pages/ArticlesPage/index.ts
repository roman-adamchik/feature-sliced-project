import { articlePageReducer } from './model/slice/articlePageSlice';
import { type ArticlePageSchema } from './model/types/articlePageSchema';
import { ArticlesPageAsync } from './ui/ArticlesPage/ArticlesPage.async';

export {
  ArticlesPageAsync as ArticlesPage,
  type ArticlePageSchema,
  articlePageReducer,
};
