'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserInfoApi } from './api';

const useUser = () => {
  const QUERY_KEY = ['user'];

  const query = useQuery(QUERY_KEY, getUserInfoApi, {
    retry: false,
  });

  return query;
};

export default useUser;
