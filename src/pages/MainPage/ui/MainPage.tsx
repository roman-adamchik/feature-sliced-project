import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return <Page>
    {t('Main page')}
      <RatingCard
        // eslint-disable-next-line i18next/no-literal-string
        feedbackTitle='Please rate us'
        // eslint-disable-next-line i18next/no-literal-string
        title='Rate us'
        hasFeedback
      />
    </Page>;
});

export default MainPage;
