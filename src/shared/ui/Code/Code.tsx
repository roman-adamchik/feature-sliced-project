import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '@/shared/assets/icons/copy.svg';

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
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={handleCopy}
      >
        <CopyIcon />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
