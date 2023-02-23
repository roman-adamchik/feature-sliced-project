import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { type StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    devTools: GLOBAL_IS_DEV,
    preloadedState: initialState,
  });
};
