import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {
    className = '',
  } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      ARTICLE DETAILS
    </div>
  );
};

export default ArticleDetailsPage;
