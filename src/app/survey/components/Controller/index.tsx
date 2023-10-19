import Chip from '@/components/chip';
import Spacing from '@/components/spacing';

const Controller = () => {
  return (
    <div className="flex">
      <Chip
        value="설문 소개"
        variant="surveyWritingCompleted"
        size="medium"
        hasIcon
      />
      <Spacing size={8} direction="horizontal" />
      <Chip
        value="설문 작성"
        variant="surveyWritingSelected"
        size="medium"
        hasIcon
      />
      <Spacing size={8} direction="horizontal" />
      <Chip value="설문 결과" variant="surveyWriting" size="medium" hasIcon />
      <Spacing size={467} direction="horizontal" />
      <Chip value="검색" variant="search" hasIcon />
      <Spacing size={8} direction="horizontal" />
      <Chip value="설정" variant="config" hasIcon />
    </div>
  );
};

export default Controller;
