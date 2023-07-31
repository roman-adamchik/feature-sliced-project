import { validateProfileData } from './validateProfileData';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileValidationErrors } from '../../consts/consts';

const profileData = {
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

describe('validateProfileData.test', () => {
  test('Successfull validation', async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('Without first name', async () => {
    const result = validateProfileData({ ...profileData, name: '' });

    expect(result).toEqual([ProfileValidationErrors.INCORRECT_USER_DATA]);
  });

  test('Without data', async () => {
    const profileData = undefined;

    const result = validateProfileData(profileData);

    expect(result).toEqual([ProfileValidationErrors.NO_DATA]);
  });

  test('Wrong avatar url', async () => {
    const result = validateProfileData({
      ...profileData,
      avatar:
        'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar',
    });

    expect(result).toEqual([ProfileValidationErrors.INCORRECT_USER_AVATAR]);
  });
});
