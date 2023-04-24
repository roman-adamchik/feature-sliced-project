import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import AlarmIcon from 'shared/assets/icons/alarm.svg';
import { NotificationList } from 'entities/Notification';

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {
    className = '',
  } = props;

  return (
    <Popover
      className={classNames(cls.notificationButton, {}, [className])}
      triggerElement={(
        <Button theme={ButtonTheme.CLEAR}>
          <AlarmIcon className={cls.alarmIcon}/>
        </Button>
      )}
      direction='bottom left'
    >
      <NotificationList className={cls.trigger}/>
    </Popover>
  );
});

NotificationButton.displayName = 'NotificationButton';
