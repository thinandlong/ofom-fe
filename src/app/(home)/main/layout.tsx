import { ReactNode } from 'react';
import Sidebar from '@/layouts/Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default MainLayout;
