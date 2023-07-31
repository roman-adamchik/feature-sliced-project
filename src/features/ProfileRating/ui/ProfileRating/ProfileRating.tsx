import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useProfileRating, useRateProfile } from '../../api/profileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className = '', profileId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useProfileRating({
    profileId,
    userId: userData?.id || '',
  });
  const [rateProfileMutation] = useRateProfile();
  const rating = data?.[0];

  const handleRateProfile = useCallback(
    async (starsCount: number, feedback?: string) => {
      try {
        await rateProfileMutation({
          profileId,
          userId: userData?.id || '',
          feedback,
          rate: starsCount,
        });
      } catch (e) {
        // handle error
        console.log(e);
      }
    },
    [profileId, rateProfileMutation, userData?.id],
  );

  const handleAccept = useCallback(
    async (starsCount: number, feedback?: string) => {
      await handleRateProfile(starsCount, feedback);
    },
    [handleRateProfile],
  );

  const handleCancel = useCallback(
    async (starsCount: number) => {
      await handleRateProfile(starsCount);
    },
    [handleRateProfile],
  );

  if (isLoading) {
    return <Skeleton height={120} width="100%" />;
  }

  return (
    <RatingCard
      onAccept={handleAccept}
      onCancel={handleCancel}
      className={className}
      title={t('Rate the author')}
      feedbackTitle={t('Please leave your feedback about the author')}
      hasFeedback
      rate={rating?.rate}
    />
  );
});

export default ProfileRating;
