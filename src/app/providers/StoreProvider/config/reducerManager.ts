import { combineReducers, type ReducersMapObject } from '@reduxjs/toolkit';
import {
  type StateSchemaKey,
  type StateSchema,
  type ReducerManager,
} from './StateSchema';
import { type AnyAction, type Reducer } from 'redux';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return false;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
      return true;
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
