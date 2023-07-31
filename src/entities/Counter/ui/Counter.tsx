/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const count = useCounterValue();
  const { add, increment, decrement } = useCounterActions();

  const handleIncrement = (): void => {
    increment();
  };

  const handleDecrement = (): void => {
    decrement();
  };

  const handleAddFive = (): void => {
    add(5);
  };

  return (
    <div data-testid="counter">
      <h1 data-testid="value">Value = {count}</h1>
      <Button onClick={handleIncrement} data-testid="increment-btn">
        Increment
      </Button>
      <Button onClick={handleDecrement} data-testid="decrement-btn">
        Decrement
      </Button>
      <Button onClick={handleAddFive} data-testid="add-five-btn">
        Add Five
      </Button>
    </div>
  );
};
