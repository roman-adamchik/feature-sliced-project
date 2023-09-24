import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
} from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation();

  return (
    <HStack
      justify="center"
      maxWidth
      className={classNames(cls.profileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('Error loading profile')}
        text={t('Try to reload the page')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      maxWidth
      className={classNames(cls.profileCard, { [cls.loading]: true })}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
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
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editable]: !readonly,
  };

  return (
    <VStack
      gap="8"
      maxWidth
      className={classNames(cls.profileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" maxWidth>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        value={data?.name}
        placeholder={t('Your name')}
        onChange={handleNameChange}
        readOnly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <InputDeprecated
        value={data?.lastname}
        placeholder={t('Your last name')}
        onChange={handleLastnameChange}
        readOnly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t('Your age')}
        onChange={handleAgeChange}
        readOnly={readonly}
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t('Your city')}
        onChange={handleCityChange}
        readOnly={readonly}
      />
      <InputDeprecated
        value={data?.username}
        placeholder={t('Your username')}
        onChange={handleUsernameChange}
        readOnly={readonly}
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t('Your avatar url')}
        onChange={handleAvatarChange}
        readOnly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={handleCurrencyChange}
        readOnly={readonly}
      />
      <CountrySelect
        value={data?.country}
        onChange={handleCountryChange}
        readOnly={readonly}
      />
    </VStack>
  );
});
