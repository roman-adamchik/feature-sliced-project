import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from '@/shared/const/localStorage';
import { type User, type UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

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
      localStorage.setItem(LOCAL_STORAGE_AUTH_DATA_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      // TODO consider refactor it later in order to have only pure functions in reducers
      localStorage.removeItem(LOCAL_STORAGE_AUTH_DATA_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveJsonSettings.fulfilled,
        (state, {payload}: PayloadAction<JsonSettings>) => {
          if (state.authData) {
            state.authData.jsonSettings = payload;
          }
        },
      );
    builder
      .addCase(
        initAuthData.fulfilled,
        (state, {payload}: PayloadAction<User>) => {
          state.authData = payload;
          setFeatureFlags(payload.features);
          state._initialized = true;
        },
      );
    builder
      .addCase(
        initAuthData.rejected,
        (state) => {
          state._initialized = true;
        },
      );
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
