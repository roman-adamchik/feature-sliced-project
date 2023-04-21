import { type StateSchema } from 'app/providers/StoreProvider';
import { ProfileValidationErrors } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('getProfileValidateErrors', () => {
    const validateErrors = [
      ProfileValidationErrors.INCORRECT_USER_DATA,
      ProfileValidationErrors.INCORRECT_USER_AVATAR,
      ProfileValidationErrors.INCORRECT_USER_USERNAME,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('getProfileValidateErrors with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
