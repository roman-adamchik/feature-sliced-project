import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className = '' } = props;
  const { t } = useTranslation();

  const handleReload = (): void => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('Something went wrong. Please, try again')}</p>
      <Button onClick={handleReload}>
        {t('Reload')}
      </Button>
    </div>
  );
};
