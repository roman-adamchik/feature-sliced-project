import { AddCommentToArticle } from '@/features/AddCommentToArticle';
import {
  ArticleCommentList,
  fetchCommentsByArticleId,
} from '@/features/ArticleCommentList';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/Text';

interface ArticleDetailsCommentsProps {
  id?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const fetchComments = useCallback(() => {
      if (id) {
        void dispatch(fetchCommentsByArticleId(id));
      }
    }, [dispatch, id]);

    return (
      <>
        <Text title={t('Comments')} />
        <AddCommentToArticle fetchComments={fetchComments} />
        <ArticleCommentList articleId={id} />
      </>
    );
  },
);

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
