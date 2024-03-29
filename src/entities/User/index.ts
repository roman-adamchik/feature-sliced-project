import { initAuthData } from './model/services/initAuthData';
import { saveJsonSettings } from './model/services/saveJsonSettings';
import { useJsonSettingsByKey, useJsonSettings } from './model/selectors/jsonSettings';
import { UserRole } from './model/consts/consts';
import {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from './model/selectors/roleSelectors';
import { type UserSchema, type User } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUser/getUserAuthData';
import { getUserInitialized } from './model/selectors/getUserInitialized/getUserInitialized';

export {
  userActions,
  userReducer,
  type UserSchema,
  type User,
  getUserAuthData,
  getUserInitialized,
  isUserAdmin,
  isUserManager,
  getUserRoles,
  UserRole,
  useJsonSettingsByKey,
  saveJsonSettings,
  useJsonSettings,
  initAuthData,
};
