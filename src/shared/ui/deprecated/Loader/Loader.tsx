import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

/**
 * Deprecated, use new components from redesigned folder
 * @deprecated
 */
export const Loader = memo((props: LoaderProps) => {
  const { className = '' } = props;

  return (
    <div className={classNames('lds-spinner', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
