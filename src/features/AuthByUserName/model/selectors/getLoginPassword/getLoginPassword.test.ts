import { type StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('getLoginPassword', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'password',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('password');
  });

  test('getLoginPassword with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
