import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
