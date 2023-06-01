/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCounterValue);

  const handleIncrement = (): void => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid='counter'>
      <h1 data-testid='value'>Value = {count}</h1>
      <Button
        onClick={handleIncrement}
        data-testid='increment-btn'
      >
        Increment
      </Button>
      <Button
        onClick={handleDecrement}
        data-testid='decrement-btn'
      >
        Decrement
      </Button>
    </div>
  );
};
