import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return <Page>
    {t('Main page')}
    <Counter />
    </Page>;
});

export default MainPage;
