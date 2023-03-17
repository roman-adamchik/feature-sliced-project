import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country';
import { getProfileValidateErrors } from 'features/EditableProfileCard/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileValidationErrors } from 'features/EditableProfileCard/model/types/profile';
import { useTranslation } from 'react-i18next';

interface EditableProfileCardProps {
  className?: string
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
  const { className = '' } = props;

  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidateErrors);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const validationErrorsMap = useMemo(() => ({
    [ProfileValidationErrors.INCORRECT_USER_DATA]: t('Incorrect name or lastname'),
    [ProfileValidationErrors.INCORRECT_USER_AGE]: t('Incorrect age'),
    [ProfileValidationErrors.INCORRECT_USER_CURRENCY]: t('Incorrect currency'),
    [ProfileValidationErrors.INCORRECT_USER_COUNTRY]: t('Incorrect country'),
    [ProfileValidationErrors.INCORRECT_USER_CITY]: t('Incorrect city'),
    [ProfileValidationErrors.INCORRECT_USER_USERNAME]: t('Incorrect username'),
    [ProfileValidationErrors.INCORRECT_USER_AVATAR]: t('Incorrect avatar link'),
    [ProfileValidationErrors.NO_DATA]: t('No form data'),
    [ProfileValidationErrors.SERVER_ERROR]: t('Server responds with error'),
  }), [t]);

  const handleNameChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ name: value }));
  }, [dispatch]);

  const handleLastnameChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const handleAgeChange = useCallback((value: string) => {
    if (/^\d+$/.test(value)) {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    }
  }, [dispatch]);

  const handleCityChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const handleUsernameChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const handleAvatarChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const handleCurrencyChange = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const handleCountryChange = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <div className={classNames(cls.editableProfileCard, {}, [className])}>
      <ProfileHeader />
      {validationErrors?.length && validationErrors.map(err => (
        <Text
          key={err}
          theme={TextTheme.ERROR}
          text={validationErrorsMap[err]}
      />
      ))}
      <ProfileCard
        data={form}
        isLoading={isLoading}
        error={error}
        handleNameChange={handleNameChange}
        handleLastnameChange={handleLastnameChange}
        handleAgeChange={handleAgeChange}
        handleCityChange={handleCityChange}
        handleUsernameChange={handleUsernameChange}
        handleAvatarChange={handleAvatarChange}
        handleCurrencyChange={handleCurrencyChange}
        handleCountryChange={handleCountryChange}
        readonly={readonly}
      />
    </div>
  );
};