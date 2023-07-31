import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { HStack } from '@/shared/ui/Stack';

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader = (props: ProfileHeaderProps) => {
  const { className = '' } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    if (profileData?.id) {
      void dispatch(updateProfileData());
    }
  }, [dispatch, profileData]);

  return (
    <HStack className={classNames('', {}, [className])} justify="between">
      <Text title={t('Profile')} />
      {canEdit && (
        <HStack justify="between" gap="16">
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={handleEdit}
              data-testid="ProfileHeader.editButton"
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                theme={ButtonTheme.OUTLINE_NEGATIVE}
                onClick={handleCancelEdit}
                data-testid="ProfileHeader.cancelButton"
              >
                {t('Cancel')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={handleSave}
                data-testid="ProfileHeader.saveButton"
              >
                {t('Save')}
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  );
};
