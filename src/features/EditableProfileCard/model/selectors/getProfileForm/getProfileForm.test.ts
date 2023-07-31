import { type StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('getProfileForm', () => {
    const form = {
      name: 'John',
      lastname: 'Smith',
      age: 49,
      currency: Currency.ILS,
      country: Country.Israel,
      city: 'New York',
      username: 'admin',
      avatar:
        'https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('getProfileData with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
