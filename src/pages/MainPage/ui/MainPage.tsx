import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return <Page>
    {t('Main page')}
    </Page>;
});

export default MainPage;
