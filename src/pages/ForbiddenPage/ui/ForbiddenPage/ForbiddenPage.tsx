import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo((props) => {
  const { className = '' } = props;
  const { t } = useTranslation();

  return (
    <Page
      className={classNames('', {}, [className])}
      data-testid="ForbiddenPage"
    >
      {t('Forbidden page')}
    </Page>
  );
});

export default ForbiddenPage;
