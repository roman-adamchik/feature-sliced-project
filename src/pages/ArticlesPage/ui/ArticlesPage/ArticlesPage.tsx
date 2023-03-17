import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {
    className = '',
  } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.articlesPage, {}, [className])}>
      ARTICLES PAGE
    </div>
  );
};

export default ArticlesPage;
