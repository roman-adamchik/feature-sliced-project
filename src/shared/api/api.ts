import axios from 'axios';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from '@/shared/const/localStorage';

export const $api = axios.create({
  baseURL: GLOBAL_API_URL,
  timeout: 1000,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization =
      localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY) || '';
  }

  return config;
});
