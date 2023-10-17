import { ReactNode } from 'react';
import Sidebar from '@/layouts/Sidebar';

interface SurveyLayout {
  children: ReactNode;
}

const SurveyLayout = ({ children }: SurveyLayout) => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      {children}
    </div>
  );
};

export default SurveyLayout;
