import { screen } from '@testing-library/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
  renderTestComponent,
  type RenderTestComponentOptions,
} from '@/shared/lib/tests/renderTestComponent/renderComponent';
import { EditableProfileCard } from './EditableProfileCard';
import { type Profile } from '@/entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: Profile = {
  id: '1',
  name: 'John',
  lastname: 'Smith',
  age: 49,
  currency: Currency.ILS,
  country: Country.Israel,
  city: 'New York',
  username: 'admin',
  avatar: 'https://google.com/blablabla.jpg',
};

const reducers: ReducersList = {
  profile: profileReducer,
};

const options: RenderTestComponentOptions = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
      error: '',
      isLoading: false,
      validateErrors: undefined,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: reducers,
};

describe('features/EditableProfileCard', () => {
  beforeEach(() =>
    renderTestComponent(<EditableProfileCard profileId="1" />, options),
  );

  test('Cancel button should appear after click edit', async () => {
    await userEvent.click(
      await screen.findByTestId('ProfileHeader.editButton'),
    );
    expect(
      screen.getByTestId('ProfileHeader.cancelButton'),
    ).toBeInTheDocument();
  });

  test('Restore values after canceling edit', async () => {
    await userEvent.click(
      await screen.findByTestId('ProfileHeader.editButton'),
    );
    await userEvent.clear(await screen.findByTestId('ProfileCard.firstName'));
    await userEvent.clear(await screen.findByTestId('ProfileCard.lastName'));

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('');

    await userEvent.type(
      await screen.findByTestId('ProfileCard.firstName'),
      'testName',
    );
    await userEvent.type(
      await screen.findByTestId('ProfileCard.lastName'),
      'testLastName',
    );

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('testName');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue(
      'testLastName',
    );

    await userEvent.click(
      await screen.findByTestId('ProfileHeader.cancelButton'),
    );

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue(
      options.initialState?.profile?.data?.name as string,
    );
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue(
      options.initialState?.profile?.data?.lastname as string,
    );
  });

  test('isRequired validation check', async () => {
    await userEvent.click(
      await screen.findByTestId('ProfileHeader.editButton'),
    );
    await userEvent.clear(await screen.findByTestId('ProfileCard.firstName'));
    await userEvent.click(
      await screen.findByTestId('ProfileHeader.saveButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCard.error.paragraph'),
    ).toBeInTheDocument();
  });

  test('Send PUT request to BE after passing validation', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    await userEvent.click(
      await screen.findByTestId('ProfileHeader.editButton'),
    );
    await userEvent.type(
      await screen.findByTestId('ProfileCard.firstName'),
      'testName',
    );
    await userEvent.click(
      await screen.findByTestId('ProfileHeader.saveButton'),
    );

    expect(mockPutReq).toHaveBeenCalled();
    // expect(screen.getByTestId('EditableProfileCard.error.paragraph')).toBeInTheDocument();
  });
});
