import { FeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlags } from './features';

interface toggleFeatureOptions<T> {
  name: keyof FeatureFlags
  on: () => T
  off: () => T
}

export const toggleFeatures = <T>({name, on, off}: toggleFeatureOptions<T>) => {
  if (getFeatureFlags(name)) {
    return on();
  }

  return off();
};
