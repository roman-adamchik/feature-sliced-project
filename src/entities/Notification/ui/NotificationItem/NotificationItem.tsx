import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { memo } from 'react';
import { type Notification } from '../../model/types/notification';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const {
    className = '',
    item,
  } = props;

  const content = (
    <Card
      className={classNames(cls.notificationItem, {}, [className])}
      theme={CardTheme.OUTLINED}
    >
      <Text title={item.title} text={item.description} className={cls.text}/>
    </Card>
  );

  if (item.href) {
    return (
      <AppLink to={item.href} target='_blank' className={cls.link}>
        {content}
      </AppLink>
    );
  }

  return content;
});

NotificationItem.displayName = 'NotificationItem';
