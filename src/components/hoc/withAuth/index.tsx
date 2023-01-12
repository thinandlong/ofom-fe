import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { useUser } from '@queries/index';
import { useEffect } from 'react';

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
