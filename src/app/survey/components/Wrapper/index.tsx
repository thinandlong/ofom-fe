import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col flex-1 pt-[40px] pl-[143px]">{children}</div>
  );
};

export default Wrapper;
