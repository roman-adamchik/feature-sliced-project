import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Profile } from '@/entities/Profile';
import { ProfileValidationErrors } from '../../consts/consts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig<ProfileValidationErrors[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  const formData = getProfileForm(getState());
  const errors = validateProfileData(formData);
  const profileId = formData?.id || '';

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(
      `/profile/${profileId}`,
      formData,
    );
    const profile = response.data;

    if (!profile) throw new Error();

    return profile;
  } catch (error) {
    return rejectWithValue([ProfileValidationErrors.SERVER_ERROR]);
  }
});
