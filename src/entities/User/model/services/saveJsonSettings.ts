import { JsonSettings } from './../types/jsonSettings';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUser/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { User } from '../types/user';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (jsonSettings, thunkAPI) => {
  const { rejectWithValue, dispatch, getState } = thunkAPI;
  const userData = getUserAuthData(getState());
  const oldSettings = getJsonSettings(getState());

  if (!userData) {
    return rejectWithValue('error');
  }

  const newSettings = {
    ...oldSettings,
    ...jsonSettings,
  };

  try {
    const response: User = await dispatch(
      setJsonSettingsMutation({
        jsonSettings: newSettings, 
        userId: userData.id,
      }),
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue('error');
    }

    return response.jsonSettings;
  } catch (error) {
    return rejectWithValue('error');
  }
});
