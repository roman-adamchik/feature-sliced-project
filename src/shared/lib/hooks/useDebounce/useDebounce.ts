import { type MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const timer: MutableRefObject<NodeJS.Timeout | undefined> = useRef();

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
