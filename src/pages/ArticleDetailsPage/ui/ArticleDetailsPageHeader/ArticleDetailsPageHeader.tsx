import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/deprecated/Stack';
import {
  getRouteArticleDetails,
  getRouteArticles,
} from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const handleBackToArticles = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const handleEdit = useCallback(() => {
      if (article) {
        navigate(getRouteArticleDetails(article.id));
      }
    }, [navigate, article]);

    return (
      <HStack
        align="center"
        justify="between"
        className={classNames('', {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToArticles}>
          {t('Back to articles list')}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINE} onClick={handleEdit}>
            {t('Edit the article')}
          </Button>
        )}
      </HStack>
    );
  },
);

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
