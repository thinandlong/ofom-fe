import Icon from '@/components/icon';
import Spacing from '@/components/spacing';

import { type SurveyControllerIconType } from '@/interfaces';

interface ChipProps {
  value: string;
  variant: SurveyControllerIconType;
  size?: 'medium' | 'default';
  hasIcon?: boolean;
}

const Chip = ({
  value,
  variant,
  size = 'default',
  hasIcon = false,
}: ChipProps) => {
  const TYPE_VARIANT = {
    surveyWriting: 'bg-white text-gray500',
    surveyWritingSelected: 'bg-blue850 text-white',
    surveyWritingCompleted: 'bg-blue850 text-white',
    search: 'bg-gray200 text-gray700',
    config: 'bg-gray700 hover:bg-gray800 text-gray200 hover:text-white',
  };

  const SIZE_VARIANT = {
    default: 'w-[92px] h-[40px] px-[16px] py-[8px] rounded-[100px]',
    medium: 'w-[123px] h-[40px] px-[16px] py-[8px] rounded-[100px]',
  };

  const ICON_COLOR = {
    surveyWriting: 'text-gray500',
    surveyWritingSelected: 'text-[#FFFFFF80]',
    surveyWritingCompleted: 'text-white',
    search: 'text-gray700',
    config: 'hover:text-white',
  };

  return (
    <button
      className={`flex-center shadow text-body_2_BD ${TYPE_VARIANT[variant]} ${SIZE_VARIANT[size]}`}
      type="button"
    >
      {hasIcon && (
        <>
          <Icon
            className={`w-[24px] h-[24px] ${ICON_COLOR[variant]}`}
            type={variant}
          />
          <Spacing direction="horizontal" size={8} />
        </>
      )}
      {value}
    </button>
  );
};

export default Chip;
