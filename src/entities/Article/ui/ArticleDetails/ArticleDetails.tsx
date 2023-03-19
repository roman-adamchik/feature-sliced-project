import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetails.module.scss';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className = '',
    id,
  } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const articleData = useSelector(getArticleDetailsData);

  useInitialEffect(() => {
    void dispatch(fetchArticleById(id));
  });

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>;
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          width={200}
          height={200}
          borderRadius={'50%'}
          className={cls.avatar}
        />
        <Skeleton
          height={32}
          width={300}
          className={cls.title}
        />
        <Skeleton
          height={24}
          width={600}
          className={cls.skeleton}
        />
        <Skeleton
          height={200}
          className={cls.skeleton}
        />
        <Skeleton
          height={200}
          className={cls.skeleton}
        />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Error loading the article')}
      />
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            src={articleData?.img}
            alt="avatar"
            className={cls.avatar}
          />
        </div>
        <Text
          className={cls.title}
          size={TextSize.L}
          title={articleData?.title}
          text={articleData?.subtitle}
        />
        <div className={cls.articleInfo}>
          <EyeIcon />
          <Text text={String(articleData?.views)}/>
        </div>
        <div className={cls.articleInfo}>
          <CalendarIcon />
          <Text text={articleData?.createdAt}/>
        </div>
        {articleData?.blocks.map(block => renderBlock(block))}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
