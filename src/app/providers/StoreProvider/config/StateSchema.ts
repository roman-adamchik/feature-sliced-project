import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm?: LoginSchema
}
