import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const profileData = {
  name: 'John',
  lastname: 'Smith',
  age: 49,
  currency: Currency.ILS,
  country: Country.Israel,
  city: 'New York',
  username: 'admin',
  avatar: 'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
};

describe('fetchProfileData.test', () => {
  test('Successfull fetch profile', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchProfileData);

    testAsyncThunk.api.get.mockReturnValue(Promise.resolve(
      {
        data: profileData,
      },
    ));
    const result = await testAsyncThunk.callThunk('1');

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('Failed fetch profile', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchProfileData);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve(
      {
        status: 403,
      },
    ));
    const result = await testAsyncThunk.callThunk('1');

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
