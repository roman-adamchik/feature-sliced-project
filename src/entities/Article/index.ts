import { ArticleList } from './ui/ArticleList/ArticleList';
import { getArticleDetailsData } from './model/selectors/articleDetails';
import { type ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { type Article, ArticleType, ArticleBlockType, ArticleListViewType } from './model/types/article';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
  ArticleDetails,
  type ArticleDetailsSchema,
  type Article,
  ArticleType,
  ArticleBlockType,
  getArticleDetailsData,
  ArticleList,
  ArticleListViewType,
};
