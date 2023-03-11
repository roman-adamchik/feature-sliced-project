import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('getProfileError', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'some error',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual('some error');
  });

  test('getProfileError with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual('');
  });
});
