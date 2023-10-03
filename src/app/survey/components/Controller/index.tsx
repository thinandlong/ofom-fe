import Chip from '@/components/chip';

const Controller = () => {
  return (
    <div className="flex">
      <Chip
        value="설문 소개"
        variant="surveyWritingCompleted"
        size="medium"
        hasIcon
      />
      <Chip
        value="설문 작성"
        variant="surveyWritingSelected"
        size="medium"
        hasIcon
      />
      <Chip value="설문 결과" variant="surveyWriting" size="medium" hasIcon />
      <Chip value="검색" variant="search" hasIcon />
      <Chip value="설정" variant="config" hasIcon />
    </div>
  );
};

export default Controller;
