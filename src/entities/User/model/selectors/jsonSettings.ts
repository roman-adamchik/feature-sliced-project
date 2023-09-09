import { JsonSettings } from './../types/jsonSettings';
import { StateSchema } from "@/app/providers/StoreProvider";
import { buildSelector } from "@/shared/lib/store";

export const defaultJsonSettings: JsonSettings = {};

export const [ useJsonSettings, getJsonSettings ] = buildSelector(
  (state: StateSchema) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);

export const [ useJsonSettingsByKey, getJsonSettingsByKey ] = buildSelector(
  (state: StateSchema, key: keyof JsonSettings) => state.user.authData?.jsonSettings?.[key],
);