import { ChangeEvent, useState } from 'react';
import Spacing from '@/components/spacing';
import RequireChip from './RequireChip';

interface TextFieldProps {
  type: 'title' | 'desc' | 'limit';
}

const TextField = ({ type }: TextFieldProps) => {
  const [value, setValue] = useState('');

  const requireTextFieldTitle = () => {
    if (type === 'title') {
      return '설문지 제목';
    }

    if (type === 'desc') {
      return '설문지 설명';
    }

    if (type === 'limit') {
      return '기한';
    }
  };

  const requireTextFieldLimitText = () => {
    if (type === 'title') {
      return '0/40';
    }

    if (type === 'desc') {
      return '0/500';
    }
  };

  const requireTextFieldLimitDay = () => {
    return '무기한';
  };

  const requireTextFieldPlaceholder = () => {
    if (type === 'title') {
      return '설문지 제목을 입력해주세요. (최대 40자)';
    }

    if (type === 'desc') {
      return '설문지의 상세 설명을 입력해주세요. (최대 500자)';
    }

    if (type === 'limit') {
      return 'YYYY. MM. DD (00:00) ~ YYYY. MM. DD (00:00)';
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  const TEXT_PLACEHOLDER_SIZE = {
    title: 'text-title_2_BD',
    desc: 'text- body_1_MD',
    limit: `text-gray500 text-xl font-medium font-['Pretendard'] leading-[30px]`,
  };

  return (
    <div className="w-[1044px] h-[127px] px-[24px] py-[24px] bg-white rounded-lg border border-gray200 inline-flex flex-col justify-start items-start gap-2">
      <div className="flex justify-between w-full">
        <div className="flex items-center h-[24px]">
          {(type === 'title' || type === 'desc' || type === 'limit') && (
            <RequireChip />
          )}
          <Spacing direction="horizontal" size={12} />
          <span className="text-body_2_SB">{requireTextFieldTitle()}</span>
        </div>

        {type === 'title' || type === 'desc' ? (
          <span className="w-[35px] h-5 p-1 bg-gray100 rounded justify-end items-start gap-2 inline-flex text-gray500 text-center text-xs font-medium font-['Pretendard'] leading-3">
            {requireTextFieldLimitText()}
          </span>
        ) : (
          <span>{requireTextFieldLimitDay()}</span>
        )}
      </div>

      <input
        className={`w-full text-gray500 ${TEXT_PLACEHOLDER_SIZE[type]}`}
        type="text"
        value={value}
        placeholder={requireTextFieldPlaceholder()}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
