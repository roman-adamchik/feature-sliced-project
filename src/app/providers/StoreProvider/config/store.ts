import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { type StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: GLOBAL_IS_DEV,
    preloadedState: initialState,
  });
};
