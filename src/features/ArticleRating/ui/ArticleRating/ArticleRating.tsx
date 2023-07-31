import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useArticleRatings, useRateArticle } from '../../api/articleRatingApi';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className = '', articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useArticleRatings({
    articleId,
    userId: userData?.id || '',
  });
  const [rateArticleMutation] = useRateArticle();
  const rating = data?.[0];

  const handleRateArticle = useCallback(
    async (starsCount: number, feedback?: string) => {
      try {
        await rateArticleMutation({
          articleId,
          userId: userData?.id || '',
          feedback,
          rate: starsCount,
        });
      } catch (e) {
        // handle error
        console.log(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const handleAccept = useCallback(
    async (starsCount: number, feedback?: string) => {
      await handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const handleCancel = useCallback(
    async (starsCount: number) => {
      await handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton height={120} width="100%" />;
  }

  return (
    <RatingCard
      onAccept={handleAccept}
      onCancel={handleCancel}
      className={className}
      title={t('Rate the article')}
      feedbackTitle={t('Please leave your feedback about the article')}
      hasFeedback
      rate={rating?.rate}
    />
  );
});

export default ArticleRating;
