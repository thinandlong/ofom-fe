interface BadgeProps {
  variant: 'require' | 'select';
  count: number;
}

const Badge = ({ variant, count }: BadgeProps) => {
  const TYPE_VARIANTS = {
    require: 'text-blue850 bg-blue100',
    select: 'text-gray600 bg-gray200',
  };

  const TEXT_VARIANTS = {
    require: '필수',
    select: '선택',
  };

  return (
    <div
      className={`flex items-start w-[49px] h-[23px] py-[3px] px-[8px] rounded-[100px] gap-[4px] ${TYPE_VARIANTS[variant]}`}
    >
      <span className="w-[21px] h-[17px] text-caption_1_RG">
        {TEXT_VARIANTS[variant]}
      </span>
      <span className="w-[8px] h-[17px] text-caption_1_SB">{count}</span>
    </div>
  );
};

export default Badge;
