import { articleDetailsCommentsReducer } from './model/slice/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleCommentList } from './ui/ArticleCommentList/ArticleCommentList';
import { type ArticleDetailsCommentSchema } from './model/types/ArticleDetailsCommentSchema';

export {
  articleDetailsCommentsReducer,
  type ArticleDetailsCommentSchema,
  ArticleCommentList,
  fetchCommentsByArticleId,
};
