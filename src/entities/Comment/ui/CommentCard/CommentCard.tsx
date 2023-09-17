import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { memo } from 'react';
import { type Comment } from '../../model/types/comment';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className = '', comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton borderRadius="50%" height={30} width={30} />
          <Skeleton height={24} width={180} />
        </div>
        <Skeleton height={80} width="100%" className={cls.text} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <AppLink className={cls.header} to={getRouteProfile(comment.user.id)}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text
        text={comment.text}
        className={cls.text}
        data-testid="CommentCard"
      />
    </div>
  );
});
