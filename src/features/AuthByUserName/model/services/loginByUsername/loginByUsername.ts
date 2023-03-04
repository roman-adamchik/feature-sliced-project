import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { userActions, type User } from 'entities/User';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from 'shared/const/localStorage';

interface LoginByUsername {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', authData);
      const user = response.data;

      if (!user) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_AUTH_DATA_KEY, JSON.stringify(user));
      dispatch(userActions.setAuthData(user));

      extra.navigate?.('/about');

      return user;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
