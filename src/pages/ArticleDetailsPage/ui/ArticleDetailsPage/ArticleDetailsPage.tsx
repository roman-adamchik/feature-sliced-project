import { ArticleDetails } from '@/entities/Article';
import { memo, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { useTranslation } from 'react-i18next';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const { className = '' } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  if (!id) return null;

  return (
    <ToggleFeatures
      feature={'isNewDesign'}
      on={
        <StickyContentLayout
          content={
            <Page className={classNames('', {}, [className])}>
              <VStack gap="16" align="stretch">
                <DetailsContainer />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
              </VStack>
            </Page>
          }
          right={<AdditionalInfoContainer />}
        />
      }
      off={
        <Page className={classNames('', {}, [className])}>
          <VStack gap="16" align="stretch">
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <CardDeprecated>
              {t('Article rating coming soon...')}
            </CardDeprecated>
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id} />
          </VStack>
        </Page>
      }
    />
  );
});

export default ArticleDetailsPage;
