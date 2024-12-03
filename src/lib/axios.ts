import {env} from '@/env';
import axios from 'axios';

import {initInterception} from './interceptors';

export const api = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

const token = env.VITE_GITHUB_TOKEN;

initInterception(api, token);
