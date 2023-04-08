import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';
import { getArticleDetailsData } from 'entities/Article';

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const handleBackToArticles = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const handleEdit = useCallback(() => {
    if (article) {
      navigate(RoutePath.article_details + article.id + '/edit');
    }
  }, [navigate, article]);

  return (
    <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToArticles}>
        {t('Back to articles list')}
      </Button>
      {canEdit && <Button theme={ButtonTheme.OUTLINE} onClick={handleEdit}>
        {t('Edit the article')}
      </Button>}
    </div>
  );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
