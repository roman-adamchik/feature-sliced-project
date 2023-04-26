import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername.test', () => {
  test('Successfull login', async () => {
    const userData = {
      username: '123',
      id: '1',
    };
    const testAsyncThunk = new TestAsyncThunk(loginByUsername);

    testAsyncThunk.api.post.mockReturnValue(Promise.resolve(
      {
        data: userData,
      },
    ));
    const result = await testAsyncThunk.callThunk({ username: '123', password: '123' });

    expect(testAsyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(testAsyncThunk.dispatch).toHaveReturnedTimes(3);
    expect(testAsyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userData);
  });

  test('Failed login', async () => {
    const testAsyncThunk = new TestAsyncThunk(loginByUsername);
    testAsyncThunk.api.post.mockReturnValue(Promise.resolve(
      {
        status: 403,
      },
    ));
    const result = await testAsyncThunk.callThunk({ username: '123', password: '123' });

    expect(testAsyncThunk.dispatch).toHaveReturnedTimes(2);
    expect(testAsyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
