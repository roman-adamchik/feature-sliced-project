import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginForm } from './getLoginForm';

describe('getLoginForm.test', () => {
  test('getLoginForm state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
        username: 'test',
        password: 'test123',
      },
    };
    expect(getLoginForm(state as StateSchema)).toEqual({
      isLoading: false,
      username: 'test',
      password: 'test123',
    });
  });

  test('getLoginForm with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginForm(state as StateSchema)).toEqual(undefined);
  });
});
