import { type UserSchema, type User } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';

export {
  userActions,
  userReducer,
  type UserSchema,
  type User,
};
