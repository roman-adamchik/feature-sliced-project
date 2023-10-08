import { type ArticleCodeBlock } from '../../model/types/article';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { ToggleFeatures } from '@/shared/lib/features';
import { Code } from '@/shared/ui/redesigned/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className = '', block } = props;

    return (
      <div
        className={classNames(cls.articleCodeBlockComponent, {}, [className])}
      >
        <ToggleFeatures
          feature={'isNewDesign'}
          on={<Code text={block.code} />}
          off={<CodeDeprecated text={block.code} />}
        />
      </div>
    );
  },
);
