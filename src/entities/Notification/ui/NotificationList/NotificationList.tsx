import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className = '' } = props;
  const { isLoading, data } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        className={classNames(cls.notificationList, {}, [className])}
      >
        <ToggleFeatures
          feature="isNewDesign"
          on={
            <>
              <Skeleton width="100%" borderRadius="8px" height="80px" />
              <Skeleton width="100%" borderRadius="8px" height="80px" />
              <Skeleton width="100%" borderRadius="8px" height="80px" />
            </>
          }
          off={
            <>
              <SkeletonDeprecated
                width="100%"
                borderRadius="8px"
                height="80px"
              />
              <SkeletonDeprecated
                width="100%"
                borderRadius="8px"
                height="80px"
              />
              <SkeletonDeprecated
                width="100%"
                borderRadius="8px"
                height="80px"
              />
            </>
          }
        />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      className={classNames(cls.notificationList, {}, [className])}
    >
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});

NotificationList.displayName = 'NotificationList';
