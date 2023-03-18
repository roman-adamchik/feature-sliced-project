import { type ArticleTextBlock } from '../../model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const {
    className = '',
    block,
  } = props;

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text
          title={block.title}
          className={cls.title}
        />
      )}
      {block.paragraphs.map((paragraph, i) => (
        <Text
          text={paragraph}
          key={i}
          className={cls.paragraph}
        />
      ))}
    </div>
  );
});
