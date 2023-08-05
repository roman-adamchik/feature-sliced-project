import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from '@/shared/const/localStorage';
import { type User, type UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },
    initAuthData: (state) => {
      // TODO consider refactor it later in order to have only pure functions in reducers
      const userData = localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY);

      if (userData) {
        const user = JSON.parse(userData) as User;
        state.authData = user;
        setFeatureFlags(user.features);
      }

      state._initialized = true;
    },
    logout: (state) => {
      state.authData = undefined;
      // TODO consider refactor it later in order to have only pure functions in reducers
      localStorage.removeItem(LOCAL_STORAGE_AUTH_DATA_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
