import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { t } from 'i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className = '' } = props;
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  console.log(error, isLoading);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')}/>
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.name}
          placeholder={t('Your name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your last name')}
          className={cls.input}
        />
      </div>
    </div>
  );
});
