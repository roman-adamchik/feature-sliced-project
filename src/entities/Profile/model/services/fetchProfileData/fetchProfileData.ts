import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const response = await extra.api.get<Profile>('/profile');
      const profile = response.data;

      return profile;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
