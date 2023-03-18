import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type ReactElement } from 'react';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'features/EditableProfileCard';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story): ReactElement => {
  return (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
};
