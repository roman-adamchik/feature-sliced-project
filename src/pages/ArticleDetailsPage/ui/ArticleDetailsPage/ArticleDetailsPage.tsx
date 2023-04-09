import { ArticleDetails } from 'entities/Article';
import { AddCommentToArticle } from 'features/AddCommentToArticle';
import { ArticleCommentList, fetchCommentsByArticleId } from 'features/ArticleCommentList';
import { memo, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const fetchComments = useCallback(() => {
    if (id) {
      void dispatch(fetchCommentsByArticleId(id));
    }
  }, [dispatch, id]);

  if (!id) {
    return (
      <Page className={classNames('', {}, [className])}>
        {t('Article is not found')}
      </Page>
    );
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack
        gap='16'
        align='stretch'
      >
      <ArticleDetailsPageHeader />
      <ArticleDetails id={id}/>
      <ArticleRecommendationsList />
      <Text title={t('Comments')}/>
      <AddCommentToArticle fetchComments={fetchComments}/>
      <ArticleCommentList articleId={id}/>
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
