import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { type MutableRefObject, useRef, type ReactNode, type UIEvent } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { type StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface PageProps {
  className?: string
  children: ReactNode
  handleScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const {
    className = '',
    children,
    handleScrollEnd,
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({
    cb: handleScrollEnd,
    wrapperRef,
    triggerRef,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={handleScroll}
      id='page'
    >
      {children}
      {handleScrollEnd && <div className={cls.trigger} ref={triggerRef}/>}
    </main>
  );
};
