import { t } from 'i18next';
import { useEffect, useState, type FC } from 'react';
import { Button } from 'shared';

/**
 * This component is only for testing ErrorBoundary
 */
export const ErrorButton: FC = () => {
  const [error, setError] = useState(false);

  const toggleError = (): void => {
    setError(prevState => !prevState);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={toggleError}>
      {t('Throw error')}
    </Button>
  );
};
