import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { CommentList } from '@/entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../selectors/comments/comments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleCommentListProps {
  className?: string
  articleId?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleCommentList = memo((props: ArticleCommentListProps) => {
  const {
    className = '',
    articleId,
  } = props;

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(articleId));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <CommentList comments={comments} isLoading={isLoading} error={error}/>
      </div>
    </DynamicModuleLoader>
  );
});
