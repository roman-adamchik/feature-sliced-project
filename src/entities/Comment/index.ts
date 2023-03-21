import { type AddCommentFormSchema } from './model/types/addCommentForm';
import { getAddCommentFormText } from './model/selectors/addCommentFormSelectors';
import { addCommentFormActions } from './model/slice/addCommentFormSlice';
import { type Comment } from './model/types/comment';
import AddCommentFormAsync from './ui/AddCommentForm/AddCommentForm.async';
import { CommentList } from './ui/CommentList/CommentList';

export {
  CommentList,
  type Comment,
  AddCommentFormAsync as AddCommentForm,
  addCommentFormActions,
  getAddCommentFormText,
  type AddCommentFormSchema,
};
