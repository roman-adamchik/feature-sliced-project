import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { type MutableRefObject, useRef, type ReactNode } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const {
    className = '',
    children,
    onScrollEnd,
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    cb: onScrollEnd,
    wrapperRef,
    triggerRef,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      <div ref={triggerRef}/>
    </section>
  );
};

Page.displayName = 'Page';
