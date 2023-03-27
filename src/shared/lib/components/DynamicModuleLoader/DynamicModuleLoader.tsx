import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/StoreProvider';
import { useEffect, type ReactElement } from 'react';
import { type Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
};

interface DynamicModuleLoaderProps {
  children: ReactElement
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      const isReducerAdded = store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
      if (isReducerAdded) {
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((reducerKey) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
