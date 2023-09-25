import { useQuery } from '@tanstack/react-query';
import cache from '@/models';
import { getUser } from '@/api/auth';

const useUser = () => {
  const query = useQuery(cache.getUser(), getUser, {
    retry: false,
  });

  return {
    ...query,
    user: query.data,
  };
};

export default useUser;
