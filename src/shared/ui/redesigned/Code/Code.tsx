import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button } from '../Button/Button';
import CopyIcon from '@/shared/assets/icons/redesign_copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className = '', text } = props;

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button className={cls.copyBtn} variant={'clear'} onClick={handleCopy}>
        <CopyIcon width={32} height={32} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
