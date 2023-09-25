'use client';

import axios from 'axios';
import type { CustomInstance } from '@/api/types';
import commonInterceptor from './commonInterceptor';

const createCommonInstance = () => {
  const instance: CustomInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
  commonInterceptor(instance);
  return instance;
};
const commonInstance = createCommonInstance();
export default commonInstance;
