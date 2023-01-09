import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getUserInfoApi } from './api';

const useUser = () => {
  const QUERY_KEY = ['user'];
  const router = useRouter();

  const query = useQuery(QUERY_KEY, getUserInfoApi, {
    retry: false,
    onError: () => {
      router.push('/login');
    },
  });

  return query;
};

export default useUser;
