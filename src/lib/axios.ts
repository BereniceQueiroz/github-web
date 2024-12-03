import {env} from '@/env';
import axios from 'axios';

import {initInterception} from './interceptors';

export const api = axios.create({
  baseURL: env.VITE_API_URL,
});

initInterception(api);
