import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, type User } from 'entities/User';
import { AUTH_DATA_KEY } from 'shared/const/localStorage';

interface LoginByUsername {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      const user = response.data;

      if (!user) {
        throw new Error();
      }

      localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(user));
      thunkAPI.dispatch(userActions.setAuthData(user));

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
