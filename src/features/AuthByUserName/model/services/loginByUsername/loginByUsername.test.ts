import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  test('Successfull login', async () => {
    const userData = {
      username: '123',
      id: '1',
    };
    mockedAxios.post.mockReturnValue(Promise.resolve(
      {
        data: userData,
      },
    ));
    const testAsyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await testAsyncThunk.callThunk({ username: '123', password: '123' });

    expect(testAsyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(testAsyncThunk.dispatch).toHaveReturnedTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userData);
  });

  test('Failed login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve(
      {
        status: 403,
      },
    ));
    const testAsyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await testAsyncThunk.callThunk({ username: '123', password: '123' });

    expect(testAsyncThunk.dispatch).toHaveReturnedTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
