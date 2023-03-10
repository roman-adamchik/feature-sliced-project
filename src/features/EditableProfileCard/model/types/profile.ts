import { type Country } from 'entities/Country';
import { type Currency } from 'entities/Currency';

export interface Profile {
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
}
