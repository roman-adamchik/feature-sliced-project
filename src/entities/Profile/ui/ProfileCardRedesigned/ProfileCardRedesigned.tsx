import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation();

  return (
    <HStack justify="center" maxWidth>
      <Text
        variant="error"
        title={t('Error loading profile')}
        text={t('Try to reload the page')}
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding="24" max>
      <VStack gap="32">
        <HStack maxWidth justify="center">
          <Skeleton borderRadius="100%" width={128} height={128} />
        </HStack>
        <HStack gap="32" maxWidth>
          <VStack gap="16" maxWidth>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>

          <VStack gap="16" maxWidth>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

  return (
    <Card padding="24" max className={className}>
      <VStack gap="32">
        {data?.avatar && (
          <HStack justify="center" maxWidth>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap="24" maxWidth>
          <VStack gap="16" maxWidth>
            <Input
              value={data?.name}
              label={t('Name')}
              onChange={handleNameChange}
              readonly={readonly}
              data-testid="ProfileCard.firstname"
            />
            <Input
              value={data?.lastname}
              label={t('Last name')}
              onChange={handleLastnameChange}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
            />
            <Input
              value={data?.age}
              label={t('Age')}
              onChange={handleAgeChange}
              readonly={readonly}
            />
            <Input
              value={data?.city}
              label={t('City')}
              onChange={handleCityChange}
              readonly={readonly}
            />
          </VStack>
          <VStack gap="16" maxWidth>
            <Input
              value={data?.username}
              label={t('User name')}
              onChange={handleUsernameChange}
              readonly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t('Avatar url')}
              onChange={handleAvatarChange}
              readonly={readonly}
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
        </HStack>
      </VStack>
    </Card>
  );
});
