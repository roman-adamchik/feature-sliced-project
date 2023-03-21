import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice;
