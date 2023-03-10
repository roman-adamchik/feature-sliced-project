import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileData';
import { type Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    try {
      const formData = getProfileForm(getState());
      const response = await extra.api.put<Profile>('/profile', formData);
      const profile = response.data;

      return profile;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
