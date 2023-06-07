import { buildSelector } from '@/shared/lib/store';
import { StateSchema } from '@/app/providers/StoreProvider';

export const [useCounterValue, getCounterValue] = buildSelector((state: StateSchema) => state.counter.value);
