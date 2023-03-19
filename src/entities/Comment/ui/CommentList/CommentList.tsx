import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { memo } from 'react';
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
  error?: string
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className = '',
    comments,
    isLoading,
    error,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <CommentCard
          key={1}
          className={cls.comment}
          isLoading
        />
        <CommentCard
          key={2}
          className={cls.comment}
          isLoading
        />
        <CommentCard
          key={3}
          className={cls.comment}
          isLoading
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <Text text={t('Error loading comments')} theme={TextTheme.ERROR}/>
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
        <CommentCard
          key={comment.id}
          comment={comment}
          className={cls.comment}
          isLoading={isLoading}
        />
        ))
        : <Text text={t('No comments yet')}/>}
    </div>
  );
});
