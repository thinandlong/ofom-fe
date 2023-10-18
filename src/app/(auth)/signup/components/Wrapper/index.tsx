import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex-center screen-full min-w-1200">
      <div className="bg-white flex-col-items-center w-1045 h-600 rounded-8">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
