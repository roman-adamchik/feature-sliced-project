import { useEffect } from 'react';

export const useInitialEffect = (cb: () => void) => {
  useEffect(() => {
    if (GLOBAL_PROJECT !== 'storybook') {
      cb();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
