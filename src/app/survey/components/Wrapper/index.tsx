import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div>{children}</div>;
};

export default Wrapper;
