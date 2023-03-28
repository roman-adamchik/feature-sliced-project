import { ArticleDetails } from 'entities/Article';
import { AddCommentToArticle } from 'features/AddCommentToArticle';
import { ArticleCommentList, fetchCommentsByArticleId } from 'features/ArticleCommentList';
import { useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { Page } from 'widgets/Page/Page';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchComments = useCallback(() => {
    if (id) {
      void dispatch(fetchCommentsByArticleId(id));
    }
  }, [dispatch, id]);

  const handleBackToArticles = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Article is not found')}
      </Page>
    );
  }

  return (
    <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToArticles}>
        {t('Back to articles list')}
      </Button>
      <ArticleDetails id={id}/>
      <Text title={t('Comments')} className={cls.commentTitle}/>
      <AddCommentToArticle fetchComments={fetchComments}/>
      <ArticleCommentList articleId={id}/>
    </Page>
  );
};

export default ArticleDetailsPage;
