import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/StoreProvider';
import { useEffect, type FC, type ReactElement } from 'react';
import { type Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
};

type ReducerListEntry = [
  StateSchemaKey,
  Reducer,
];

interface DynamicModuleLoaderProps {
  children: ReactElement
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]: ReducerListEntry) => {
      store.reducerManager.add(reducerKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((reducerKey: StateSchemaKey) => {
          store.reducerManager.remove(reducerKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
