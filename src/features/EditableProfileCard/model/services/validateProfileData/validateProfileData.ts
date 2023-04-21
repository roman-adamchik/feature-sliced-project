import { type Profile } from 'entities/Profile';
import { ProfileValidationErrors } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
  const errors: ProfileValidationErrors[] = [];

  if (!profile) {
    errors.push(ProfileValidationErrors.NO_DATA);
    return errors;
  }

  const {
    name,
    lastname,
    age,
    avatar,
    city,
    country,
    currency,
    username,
  } = profile;

  if (!name || !lastname) {
    errors.push(ProfileValidationErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ProfileValidationErrors.INCORRECT_USER_AGE);
  };

  if (!city) {
    errors.push(ProfileValidationErrors.INCORRECT_USER_CITY);
  };

  if (!country) {
    errors.push(ProfileValidationErrors.INCORRECT_USER_COUNTRY);
  };

  if (!currency) {
    errors.push(ProfileValidationErrors.INCORRECT_USER_CURRENCY);
  };

  if (!username) {
    errors.push(ProfileValidationErrors.INCORRECT_USER_USERNAME);
  };

  if (!avatar || !/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(avatar)) {
    errors.push(ProfileValidationErrors.INCORRECT_USER_AVATAR);
  }

  return errors;
};
