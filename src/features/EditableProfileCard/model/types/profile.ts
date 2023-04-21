import { type Profile } from 'entities/Profile';
import { type ProfileValidationErrors } from '../consts/consts';

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean | undefined
  error: string | undefined
  readonly: boolean
  validateErrors?: ProfileValidationErrors[]
}
