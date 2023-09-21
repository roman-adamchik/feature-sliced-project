import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { memo } from 'react';
import { type Notification } from '../../model/types/notification';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className = '', item } = props;

  const content = (
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <Card
          className={classNames(cls.notificationItem, {}, [className])}
          variant="normal"
        >
          <Text
            title={item.title}
            text={item.description}
            className={cls.text}
          />
        </Card>
      }
      off={
        <CardDeprecated
          className={classNames(cls.notificationItem, {}, [className])}
          theme={CardTheme.OUTLINED}
        >
          <TextDeprecated
            title={item.title}
            text={item.description}
            className={cls.text}
          />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <ToggleFeatures
        feature="isNewDesign"
        on={
          <AppLink to={item.href} target="_blank" className={cls.link}>
            {content}
          </AppLink>
        }
        off={
          <AppLinkDeprecated
            to={item.href}
            target="_blank"
            className={cls.link}
          >
            {content}
          </AppLinkDeprecated>
        }
      />
    );
  }

  return content;
});

NotificationItem.displayName = 'NotificationItem';
