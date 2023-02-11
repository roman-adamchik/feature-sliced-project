import { type FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className = '' } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = (): void => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <button onClick={toggleCollapsed}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.langSwitcher} />
      </div>
    </div>
  );
};
