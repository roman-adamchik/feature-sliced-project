import { createSelector } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../consts/consts';

export const getUserRoles = (state: StateSchema) =>
  state.user.authData?.roles || [];

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
  roles.includes(UserRole.ADMIN),
);

export const isUserManager = createSelector(getUserRoles, (roles) =>
  roles.includes(UserRole.MANAGER),
);
