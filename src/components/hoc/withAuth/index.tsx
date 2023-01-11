import { NextComponentType } from 'next';
import { useUser } from '@queries/index';

const withAuth = (Component: NextComponentType) => () => {
  const { data } = useUser();

  return data ? <Component /> : null;
};

export default withAuth;
