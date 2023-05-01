import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { type FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
  className?: string
}

export const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
  const {
    className = '',
  } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? (t('Edit page')) : (t('Create page'))}
    </Page>
  );
});

export default ArticleEditPage;
