import { createSlice } from '@reduxjs/toolkit';
import type { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  error: undefined,
  isLoading: false,
  readonly: true,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
