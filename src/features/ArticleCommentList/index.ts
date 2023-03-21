import { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentList } from './ui/ArticleCommentList/ArticleCommentList';
import { type ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';

export {
  type ArticleDetailsCommentSchema,
  ArticleCommentList,
  fetchCommentsByArticleId,
};
