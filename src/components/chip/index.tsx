import Image from 'next/image';
import Spacing from '@/components/spacing';

interface ChipProps {
  value: string;
  variant: 'surveyWriting';
  status?: 'selected' | 'completed';
  size?: 'medium';
}

const Chip = ({ value, status, variant, size = 'medium' }: ChipProps) => {
  const TYPE_VARIANT = {
    surveyWriting:
      status === 'selected' || status === 'completed'
        ? 'bg-blue850 text-white'
        : 'bg-white text-gray500',
  };

  const SIZE_VARIANT = {
    medium: 'w-[123px] h-[40px] px-[16px] py-[8px] rounded-[100px]',
  };

  const checkImage = () => {
    if (status === 'completed') {
      return '/images/check-completed.svg';
    }

    if (status === 'selected') {
      return '/images/check-selected.svg';
    }

    return '/images/check-basic.svg';
  };

  return (
    <button
      className={`flex-center shadow text-body_2_BD ${TYPE_VARIANT[variant]} ${SIZE_VARIANT[size]}`}
      type="button"
    >
      {variant === 'surveyWriting' && (
        <>
          <Image src={checkImage()} alt="check" width={24} height={24} />
          <Spacing direction="horizontal" size={8} />
        </>
      )}
      {value}
    </button>
  );
};

export default Chip;
