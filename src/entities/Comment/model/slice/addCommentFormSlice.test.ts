import { type AddCommentFormSchema } from '../types/addCommentForm';
import {
  addCommentFormReducer,
  addCommentFormActions,
} from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
  const initialState: DeepPartial<AddCommentFormSchema> = {
    text: '',
  };

  it('should handle the setText action', () => {
    const payload = 'new text';
    const nextState = addCommentFormReducer(
      initialState,
      addCommentFormActions.setText(payload),
    );

    expect(nextState.text).toEqual(payload);
  });
});
