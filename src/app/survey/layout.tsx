import { ReactNode } from 'react';
import Sidebar from '@/layouts/Sidebar';

interface SurveyLayout {
  children: ReactNode;
}

const SurveyLayout = ({ children }: SurveyLayout) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default SurveyLayout;
