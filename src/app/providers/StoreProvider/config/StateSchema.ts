import { type ArticleDetailsSchema } from 'entities/Article';
import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';
import { type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type AnyAction, type Reducer, type CombinedState } from 'redux';
import { type AxiosInstance } from 'axios';
import { type NavigateFunction } from 'react-router-dom';
import { type ProfileSchema } from 'features/EditableProfileCard';
import { type ArticleDetailsCommentSchema } from 'features/ArticleCommentList';
import { type AddCommentFormSchema } from 'entities/Comment';
import { type AppDispatch } from './store';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers below
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: NavigateFunction
}
export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  dispatch: AppDispatch
  state: StateSchema
}
