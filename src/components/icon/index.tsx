import { HTMLAttributes } from 'react';
import Check from 'public/images/check.svg';
import CheckFilled from 'public/images/check-filled.svg';
import Search from 'public/images/search.svg';
import Config from 'public/images/config.svg';

import { type SurveyControllerIconType } from '@/interfaces';

interface IconProps extends HTMLAttributes<SVGElement> {
  type: SurveyControllerIconType;
}

const Icon = ({ type, ...props }: IconProps) => {
  if (type === 'surveyWriting' || type === 'surveyWritingSelected') {
    return <Check {...props} />;
  }

  if (type === 'surveyWritingCompleted') {
    return <CheckFilled {...props} />;
  }

  if (type === 'search') {
    return <Search {...props} />;
  }

  if (type === 'config') {
    return <Config {...props} />;
  }

  return null;
};

export default Icon;
