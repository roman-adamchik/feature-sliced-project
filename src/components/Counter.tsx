import { useState } from 'react';
import classes from './Counter.module.scss';

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={handleIncrement}>
        Counter
      </button>
    </div>
  );
}
