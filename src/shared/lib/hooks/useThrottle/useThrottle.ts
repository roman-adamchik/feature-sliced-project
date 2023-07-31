import { useCallback, useRef } from 'react';

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const throttleReg = useRef(false);

  return useCallback(
    (...args: any[]) => {
      if (!throttleReg.current) {
        callback(...args);
        throttleReg.current = true;
        setTimeout(() => {
          throttleReg.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
};
