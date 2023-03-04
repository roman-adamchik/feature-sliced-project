import {
  configureStore,
  type ReducersMapObject,
  type CombinedState,
  type Reducer,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { type NavigateFunction } from 'react-router-dom';
import { $api } from 'shared/api/api';
import { createReducerManager } from './reducerManager';
import { type ThunkExtraArg, type StateSchema } from './StateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgument: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: GLOBAL_IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
  });

  // @ts-expect-error temp
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
