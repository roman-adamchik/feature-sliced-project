import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';
import { Page } from '@/widgets/Page/Page';

interface AdminPanelPageProps {
  className?: string
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      {t('Admin panel')}
    </Page>
  );
});

export default AdminPanelPage;
