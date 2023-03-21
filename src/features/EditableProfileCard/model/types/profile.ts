import { type Country } from 'entities/Country';
import { type Currency } from 'entities/Currency';

export enum ProfileValidationErrors {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_CURRENCY = 'INCORRECT_USER_CURRENCY',
  INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
  INCORRECT_USER_CITY = 'INCORRECT_USER_CITY',
  INCORRECT_USER_USERNAME = 'INCORRECT_USER_USERNAME',
  INCORRECT_USER_AVATAR = 'INCORRECT_USER_AVATAR',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
  'id'?: string
  'name'?: string
  'lastname'?: string
  'age'?: number
  'currency'?: Currency
  'country'?: Country
  'city'?: string
  'username'?: string
  'avatar'?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean | undefined
  error: string | undefined
  readonly: boolean
  validateErrors?: ProfileValidationErrors[]
}
