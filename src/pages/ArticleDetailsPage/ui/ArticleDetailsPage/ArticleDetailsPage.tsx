import { ArticleDetails } from '@/entities/Article';
import { memo, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const { className = '' } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  if (!id) return null;

  const articleRating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => <Card>{t('Article rating coming soon...')}</Card>,
  });

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap="16" align="stretch">
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        {articleRating}
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
