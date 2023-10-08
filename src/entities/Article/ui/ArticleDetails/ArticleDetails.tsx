import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetails.module.scss';
import { memo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
} from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { renderArticleBlock } from './renderArticleBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Image } from '@/shared/ui/redesigned/Image';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const articleData = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack
        justify="center"
        maxWidth
        data-testid="ArticleDetails.avatarWrapper"
      >
        <AvatarDeprecated size={200} src={articleData?.img} alt="avatar" />
      </HStack>
      <TextDeprecated
        size={TextSize.L}
        title={articleData?.title}
        text={articleData?.subtitle}
      />
      <HStack className={cls.articleInfo} gap="4">
        <EyeIcon />
        <TextDeprecated text={String(articleData?.views)} />
      </HStack>
      <HStack className={cls.articleInfo} gap="4">
        <CalendarIcon />
        <TextDeprecated text={articleData?.createdAt} />
      </HStack>
      {articleData?.blocks.map((block) => renderArticleBlock(block))}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <Image
        fallback={<Skeleton width="100%" height={420} borderRadius="16px" />}
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className = '', id } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    void dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <HStack justify="center" maxWidth>
          <SkeletonDeprecated width={200} height={200} borderRadius={'50%'} />
        </HStack>
        <SkeletonDeprecated height={32} width={300} />
        <SkeletonDeprecated height={24} width={600} />
        <SkeletonDeprecated height={200} />
        <SkeletonDeprecated height={200} />
      </>
    );
  } else if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.CENTER}
        title={t('Error loading the article')}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature={'isNewDesign'}
        on={<Redesigned />}
        off={<Deprecated />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        className={classNames(cls.articleDetails, {}, [className])}
        gap="8"
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
