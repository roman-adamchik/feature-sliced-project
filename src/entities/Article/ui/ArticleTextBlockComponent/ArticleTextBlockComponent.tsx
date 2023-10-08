import { type ArticleTextBlock } from '../../model/types/article';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { Text as TextRedesign } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className = '', block } = props;

    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <ToggleFeatures
            feature={'isNewDesign'}
            on={<Text title={block.title} className={cls.title} />}
            off={<TextRedesign title={block.title} className={cls.title} />}
          />
        )}
        {block.paragraphs.map((paragraph, i) => (
          <ToggleFeatures
            key={i}
            feature={'isNewDesign'}
            on={<Text text={paragraph} key={i} className={cls.paragraph} />}
            off={
              <TextRedesign
                text={paragraph}
                key={i}
                className={cls.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  },
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
