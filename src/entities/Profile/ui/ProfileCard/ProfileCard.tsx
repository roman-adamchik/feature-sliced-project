import { memo } from 'react';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { type Currency, CurrencySelect } from '@/entities/Currency';
import { type Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { type Profile } from '../../model/types/profile';

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
      <HStack
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
        maxWidth
        justify='center'
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        className={classNames(cls.profileCard, {}, [className, cls.error])}
        maxWidth
        justify='center'
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Something went wrong while loading data')}
          text={t('Please try again later')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editable]: !readonly,
  };

  return (
    <VStack
      className={classNames(cls.profileCard, mods, [className])}
      gap='8'
    >
      {data?.avatar && (
        <HStack
          maxWidth
          justify='center'
        >
          <Avatar src={data.avatar} alt='avatar'/>
        </HStack>
      )}
      <Input
        value={data?.name}
        placeholder={t('Your name')}
        readOnly={readonly}
        onChange={handleNameChange}
        data-testid='ProfileCard.firstName'
      />
      <Input
        value={data?.lastname}
        placeholder={t('Your last name')}
        readOnly={readonly}
        onChange={handleLastnameChange}
        data-testid='ProfileCard.lastName'
      />
      <Input
        value={data?.age}
        placeholder={t('Your age')}
        readOnly={readonly}
        onChange={handleAgeChange}
        data-testid='ProfileCard.age'
      />
      <Input
        value={data?.city}
        placeholder={t('Your city')}
        readOnly={readonly}
        onChange={handleCityChange}
        data-testid='ProfileCard.city'
      />
      <Input
        value={data?.username}
        placeholder={t('Your username')}
        readOnly={readonly}
        onChange={handleUsernameChange}
        data-testid='ProfileCard.username'
      />
      <Input
        value={data?.avatar}
        placeholder={t('Your avatar url')}
        readOnly={readonly}
        onChange={handleAvatarChange}
        data-testid='ProfileCard.avatar'
      />
      <CurrencySelect
        readonly={readonly}
        value={data?.currency}
        onChange={handleCurrencyChange}
        data-testid='ProfileCard.currency'
      />
      <CountrySelect
        readonly={readonly}
        value={data?.country}
        onChange={handleCountryChange}
        data-testid='ProfileCard.country'
      />
    </VStack>
  );
});
