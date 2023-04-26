import { type ArticleImageBlock } from '../../model/types/article';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const {
    className = '',
    block,
  } = props;

  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} alt={block.title}/>
      {block.title && (
        <Text
          text={block.title}
          className={cls.title}
          align={TextAlign.CENTER}
        />
      )}
    </div>
  );
});
