import { type Country, type Currency } from 'shared/const/common';

export interface Profile {
  'name': string
  'lastname': string
  'age': number
  'currency': Currency
  'country': Country
  'city': string
  'username': string
  'avatar': string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean | undefined
  error: string | undefined
  readonly: boolean
}
