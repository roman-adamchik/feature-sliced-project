import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileValidationErrors } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { type ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  name: 'John',
  lastname: 'Smith',
  age: 49,
  currency: Currency.ILS,
  country: Country.Israel,
  city: 'New York',
  username: 'admin',
  avatar:
    'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
};

describe('profileSlice.test', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { ...data, name: '' },
      validateErrors: [ProfileValidationErrors.INCORRECT_USER_DATA],
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      data,
      form: data,
      validateErrors: undefined,
      readonly: true,
    });
  });

  test('updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { ...data },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ name: 'Adam' }),
      ),
    ).toEqual({
      form: { ...data, name: 'Adam' },
    });
  });

  test('updateProfile pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ProfileValidationErrors.INCORRECT_USER_CITY],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
});
