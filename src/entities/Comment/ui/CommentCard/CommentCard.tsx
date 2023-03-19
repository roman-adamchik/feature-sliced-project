import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { memo } from 'react';
import { type Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className = '',
    comment,
    isLoading,
  } = props;

  if (!comment || isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        <Skeleton
          borderRadius='50%'
          height={30}
          width={30}
        />
        <Skeleton
          height={24}
          width={180}
        />
      </div>
        <Skeleton
            height={80}
            width='100%'
            className={cls.text}
        />
    </div>
    );
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar}/>}
        <Text title={comment.user.username}/>
      </div>
      <Text text={comment.text} className={cls.text}/>
    </div>
  );
});
