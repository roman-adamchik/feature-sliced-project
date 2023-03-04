import axios from 'axios';
import { LOCAL_STORAGE_AUTH_DATA_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: GLOBAL_API_URL,
  timeout: 1000,
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY) || '',
  },
});
