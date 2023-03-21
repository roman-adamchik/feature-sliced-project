import { lazy } from 'react';

const AddCommentFormAsync = lazy(
  async () => await import('./AddCommentToArticle'),
);

export default AddCommentFormAsync;
