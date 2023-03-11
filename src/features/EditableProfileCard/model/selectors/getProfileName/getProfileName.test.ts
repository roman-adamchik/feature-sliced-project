import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileName } from './getProfileName';

describe('getProfileName.test', () => {
  test('getProfileName', () => {
    const data = {
      name: 'John',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileName(state as StateSchema)).toEqual('John');
  });

  test('getProfileData with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileName(state as StateSchema)).toEqual('');
  });
});
