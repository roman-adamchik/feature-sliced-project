import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { memo, useCallback, useState } from 'react';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import AlarmIcon from '@/shared/assets/icons/alarm.svg';
import NotificationIcon from '@/shared/assets/icons/redesign_notification.svg';
import { NotificationList } from '@/entities/Notification';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Popover } from '@/shared/ui/redesigned/Popups';
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
    <ToggleFeatures
      feature="isNewDesign"
      on={
        <Button variant="clear" onClick={onDrawerOpen}>
          <NotificationIcon
            className={cls.notificationIcon}
            width={32}
            height={32}
          />
        </Button>
      }
      off={
        <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onDrawerOpen}>
          <AlarmIcon className={cls.alarmIcon} />
        </ButtonDeprecated>
      }
    />
  );

  return (
    <>
      <BrowserView>
        <ToggleFeatures
          feature="isNewDesign"
          on={
            <Popover
              className={classNames(cls.notificationButton, {}, [className])}
              triggerElement={triggerElement}
              direction="bottom left"
            >
              <NotificationList className={cls.notificationList} />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={classNames(cls.notificationButton, {}, [className])}
              triggerElement={triggerElement}
              direction="bottom left"
            >
              <NotificationList className={cls.notificationList} />
            </PopoverDeprecated>
          }
        />
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
