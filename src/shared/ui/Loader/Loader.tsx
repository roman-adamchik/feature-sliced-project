import { type FC } from 'react';
import { classNames } from 'shared';
import './Loader.scss';

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
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
};
