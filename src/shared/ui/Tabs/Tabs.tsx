import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { useCallback, type ReactNode } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: Array<TabItem<T>>;
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className = '', tabs, value, onTabClick } = props;

  const handleTabClick = useCallback(
    (tabItem: TabItem<T>) => () => {
      onTabClick(tabItem);
    },
    [onTabClick],
  );

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={handleTabClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

Tabs.displayName = 'Tabs';
