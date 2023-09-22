import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: Array<TabItem<T>>;
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
  direction?: FlexDirection;
}

const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, onTabClick, value, direction = 'row' } = props;

  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      gap="8"
      align="start"
      className={classNames(cls.tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={classNames('', {
              [cls.selected]: isSelected,
            })}
            key={tab.value}
            onClick={clickHandle(tab)}
            border="rounded"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};

export const TabsWithMemo = memo(Tabs) as typeof Tabs;
