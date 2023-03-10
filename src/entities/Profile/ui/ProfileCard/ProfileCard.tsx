import { memo } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type Profile } from '../../../../features/EditableProfileCard/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { type Currency, CurrencySelect } from 'entities/Currency';
import { type Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  handleNameChange?: (value: string) => void
  handleLastnameChange?: (value: string) => void
  handleAgeChange?: (value: string) => void
  handleCityChange?: (value: string) => void
  handleUsernameChange?: (value: string) => void
  handleAvatarChange?: (value: string) => void
  handleCurrencyChange?: (value: Currency) => void
  handleCountryChange?: (value: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className = '',
    data,
    isLoading,
    error,
    readonly,
    handleNameChange,
    handleLastnameChange,
    handleAgeChange,
    handleCityChange,
    handleUsernameChange,
    handleAvatarChange,
    handleCurrencyChange,
    handleCountryChange,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Something went wrong while loading data')}
          text={t('Please try again later')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editable]: !readonly,
  };

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} alt='avatar'/>
          </div>
        )}
        <Input
          value={data?.name}
          placeholder={t('Your name')}
          className={cls.input}
          readOnly={readonly}
          onChange={handleNameChange}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your last name')}
          className={cls.input}
          readOnly={readonly}
          onChange={handleLastnameChange}
        />
        <Input
          value={data?.age}
          placeholder={t('Your age')}
          className={cls.input}
          readOnly={readonly}
          onChange={handleAgeChange}
        />
        <Input
          value={data?.city}
          placeholder={t('Your city')}
          className={cls.input}
          readOnly={readonly}
          onChange={handleCityChange}
        />
        <Input
          value={data?.username}
          placeholder={t('Your username')}
          className={cls.input}
          readOnly={readonly}
          onChange={handleUsernameChange}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Your avatar url')}
          className={cls.input}
          readOnly={readonly}
          onChange={handleAvatarChange}
        />
        <CurrencySelect
          className={cls.input}
          readonly={readonly}
          value={data?.currency}
          onChange={handleCurrencyChange}
        />
        <CountrySelect
          className={cls.input}
          readonly={readonly}
          value={data?.country}
          onChange={handleCountryChange}
        />
      </div>
    </div>
  );
});
