import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { memo, useCallback, useState } from 'react';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import AlarmIcon from '@/shared/assets/icons/alarm.svg';
import { NotificationList } from '@/entities/Notification';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className = '' } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const onDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const triggerElement = (
    <Button theme={ButtonTheme.CLEAR} onClick={onDrawerOpen}>
      <AlarmIcon className={cls.alarmIcon} />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames(cls.notificationButton, {}, [className])}
          triggerElement={triggerElement}
          direction="bottom left"
        >
          <NotificationList className={cls.notificationList} />
        </Popover>
      </BrowserView>
      <MobileView>
        {triggerElement}
        <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
          <NotificationList className={cls.notificationList} />
        </Drawer>
      </MobileView>
    </>
  );
});

NotificationButton.displayName = 'NotificationButton';
