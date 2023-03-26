import { type MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
  cb?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = (props: UseInfiniteScrollOptions) => {
  const {
    cb,
    triggerRef,
    wrapperRef,
  } = props;

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cb?.();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer?.unobserve(triggerElement);
    };
  }, [wrapperRef, triggerRef, cb]);
};
