import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UISchema } from '../types/UISchema';

const initialState: UISchema = {
  scroll: {},
};

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: uiActions, reducer: uiReducer } = UISlice;
