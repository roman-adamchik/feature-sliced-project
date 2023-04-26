import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('getLoginUsername', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'someuser',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('someuser');
  });

  test('getLoginUsername with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
