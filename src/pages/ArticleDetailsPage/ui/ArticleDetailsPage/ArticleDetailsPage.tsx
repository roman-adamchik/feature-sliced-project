import { ArticleDetails } from '@/entities/Article';
import { memo, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const {
    className = '',
  } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack
        gap='16'
        align='stretch'
      >
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id}/>
        <ArticleRating articleId={id}/>
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id}/>
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
