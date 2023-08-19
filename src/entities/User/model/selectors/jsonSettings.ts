import { JsonSettings } from './../types/jsonSettings';
import { StateSchema } from "@/app/providers/StoreProvider";
import { buildSelector } from "@/shared/lib/store";
import { Theme } from '@/shared/const/theme';

export const defaultJsonSettings: JsonSettings = {
  theme: Theme.LIGHT,
  isFirstVisit: false,
  settingsPageHasBeenOpened: false,
};

export const [ useJsonSettings, getJsonSettings ] = buildSelector(
  (state: StateSchema) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);

export const [ useJsonSettingsByKey, getJsonSettingsByKey ] = buildSelector(
  (state: StateSchema, key: keyof JsonSettings) => state.user.authData?.jsonSettings?.[key],
);