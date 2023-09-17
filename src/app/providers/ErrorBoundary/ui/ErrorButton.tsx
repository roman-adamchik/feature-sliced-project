import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';

/**
 * This component is only for testing ErrorBoundary
 */
export const ErrorButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const toggleError = (): void => {
    setError((prevState) => !prevState);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={toggleError}>{t('Throw error')}</Button>;
};
