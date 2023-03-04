import { getCounter } from './getCounter';
import { type StateSchema } from 'app/providers/StoreProvider';

describe('getCounter.test', () => {
  test('get counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
