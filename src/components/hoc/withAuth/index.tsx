import { useEffect } from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';

const withAuth = (Component: NextComponentType) => () => {
  const { data, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push('/login');
    }
  }, [data, router, isLoading]);

  return data ? <Component /> : null;
};

export default withAuth;
