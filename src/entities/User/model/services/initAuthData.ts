import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../types/user';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from '@/shared/const/localStorage';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<
  User,
  void,
  ThunkConfig<string>
>('user/initAuthData', async (_, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI;

  const userId = localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY);

  if (!userId) {
    return rejectWithValue('error');
  }

  try {
    const response: User = await dispatch(
      getUserDataByIdQuery(userId),
    ).unwrap();

    if (!response.id) {
      return rejectWithValue('error');
    }

    return response;
  } catch (error) {
    return rejectWithValue('error');
  }
});
