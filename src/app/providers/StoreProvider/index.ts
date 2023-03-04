import type {
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKey,
  ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, type AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type StateSchemaKey,
  type AppDispatch,
  type ThunkConfig,
};
