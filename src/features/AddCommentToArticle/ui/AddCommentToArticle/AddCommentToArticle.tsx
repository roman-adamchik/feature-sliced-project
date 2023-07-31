import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { sendCommentForArticle } from '../../model/services/sendCommentForArticle/sendCommentForArticle';
import { AddCommentForm } from '@/entities/Comment';

interface AddCommentFormProps {
  className?: string;
  fetchComments: () => void;
}

const AddCommentToArticle = memo((props: AddCommentFormProps) => {
  const { className = '', fetchComments } = props;
  const dispatch = useAppDispatch();

  const handleSendComment = useCallback(
    async (text: string) => {
      const result = await dispatch(sendCommentForArticle(text));
      if (result) {
        fetchComments();
      }
    },
    [dispatch, fetchComments],
  );

  return (
    <AddCommentForm sendComment={handleSendComment} className={className} />
  );
});

export default AddCommentToArticle;
