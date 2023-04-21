import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileValidationErrors } from '../../consts/consts';

const profileData = {
  name: 'John',
  lastname: 'Smith',
  age: 49,
  currency: Currency.ILS,
  country: Country.Israel,
  city: 'New York',
  username: 'admin',
  avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
  id: '1',
};

describe('updateProfileData.test', () => {
  test('Successfull update profile', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });

    testAsyncThunk.api.put.mockReturnValue(Promise.resolve(
      {
        data: profileData,
      },
    ));
    const result = await testAsyncThunk.callThunk(undefined);

    expect(testAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('Failed update profile', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    testAsyncThunk.api.put.mockReturnValue(Promise.resolve(
      {
        status: 403,
      },
    ));
    const result = await testAsyncThunk.callThunk(undefined);

    expect(testAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ProfileValidationErrors.SERVER_ERROR]);
  });

  test('Failed validate profile', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profileData, age: 0 },
      },
    });

    const result = await testAsyncThunk.callThunk(undefined);

    expect(result.payload).toEqual([ProfileValidationErrors.INCORRECT_USER_AGE]);
  });
});
