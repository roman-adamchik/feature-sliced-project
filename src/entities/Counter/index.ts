import { Counter } from './ui/Counter';
import { counterActions, counterReducer } from './model/slice/counterSlice';
import { type CounterSchema } from './model/types/counterSchema';

export {
  type CounterSchema,
  counterReducer,
  counterActions,
  Counter,
};
