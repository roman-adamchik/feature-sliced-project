import { type ArticleDetailsSchema } from '@/entities/Article';
import { type CounterSchema } from '@/entities/Counter';
import { type UserSchema } from '@/entities/User';
import { type LoginSchema } from '@/features/AuthByUserName';
import { type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type AnyAction, type Reducer, type CombinedState } from 'redux';
import { type AxiosInstance } from 'axios';
import { type ProfileSchema } from '@/features/EditableProfileCard';
import { type ArticleDetailsCommentSchema } from '@/features/ArticleCommentList';
import { type AddCommentFormSchema } from '@/entities/Comment';
import { type AppDispatch } from './store';
import { type ArticlePageSchema } from '@/pages/ArticlesPage';
import { type UISchema } from '@/features/UI';
import { type rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => boolean
  remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
  api: AxiosInstance
}
export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  dispatch: AppDispatch
  state: StateSchema
}
