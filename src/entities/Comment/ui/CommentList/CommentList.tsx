import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';

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
      <VStack
        className={classNames('', {}, [className])}
        gap='16'
        align='stretch'
      >
        <CommentCard
          key={1}
          isLoading
        />
        <CommentCard
          key={2}
          isLoading
        />
        <CommentCard
          key={3}
          isLoading
        />
      </VStack>
    );
  }

  if (error) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text text={t('Error loading comments')} theme={TextTheme.ERROR}/>
      </div>
    );
  }

  return (
    <VStack
      className={classNames('', {}, [className])}
      gap='16'
      align='stretch'
    >
      {comments?.length
        ? comments.map(comment => (
        <CommentCard
          key={comment.id}
          comment={comment}
          isLoading={isLoading}
        />
        ))
        : <Text text={t('No comments yet')}/>}
    </VStack>
  );
});
