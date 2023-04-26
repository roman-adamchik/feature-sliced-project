import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from '@/shared/const/localStorage';
import { type User, type UserSchema } from '../types/user';

const initialState: UserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      // TODO consider refactor it later in order to have only pure functions in reducers
      const user = localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY);

      if (user) {
        state.authData = JSON.parse(user);
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
