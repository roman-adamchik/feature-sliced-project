import { FeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlags } from './features';

interface toggleFeatureOptions<T> {
  feature: keyof FeatureFlags
  on: () => T
  off: () => T
}

export const toggleFeatures = <T>({feature, on, off}: toggleFeatureOptions<T>) => {
  if (getFeatureFlags(feature)) {
    return on();
  }

  return off();
};
