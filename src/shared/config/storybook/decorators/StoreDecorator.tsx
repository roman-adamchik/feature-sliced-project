import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type ReactElement } from 'react';
import { type DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
) => (StoryComponent: Story): ReactElement => {
  return (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
};
