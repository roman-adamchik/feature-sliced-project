import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('getLoginError', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'some error',
        username: '',
        password: '',
        isLoading: false,
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('some error');
  });

  test('getLoginError with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
