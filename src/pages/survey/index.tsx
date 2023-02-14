/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { formDataIdStore } from '@store/surveyIntroduceState';
import { cloneElement, FormEvent, KeyboardEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { DurationNotice, Notice, Textfield } from './components';
import AdditionalTextfield from './components/AdditionalTextfield';
import { SURVEY_INTRO } from './constants';
import createSurveyFormData from './utils/createSurveyFormData';

const Survey = () => {
  const [formDataId, setFormDataId] = useRecoilState(formDataIdStore);
  const [textFields, setTextFields] = useState([
    <Textfield
      label="설문지 제목"
      key={0}
      placeholder="설문지 제목을 입력해주세요. (최대 40자)"
      inputFontSize="text-title_2_BD"
      inputId={formDataId[0]}
      notice={<Notice text="0/40" />}
    />,
    <Textfield
      key={1}
      label="설문지 설명"
      inputId={formDataId[1]}
      placeholder="설문지의 상세 설명을 입력해주세요. (최대 500자)"
      inputFontSize="text-body_1_MD"
      type="textArea"
      notice={<Notice text="0/500" />}
    />,
    <Textfield
      key={2}
      label="기한"
      inputId={formDataId[2]}
      placeholder="YYYY. MM. DD (00:00) ~ YYYY. MM. DD (00:00)"
      inputFontSize="text-body_1_MD"
      notice={<DurationNotice />}
    />,
  ]);
  const handleKeyDownForPreventEnterSubmit = (
    e: KeyboardEvent<HTMLFormElement>,
  ) => {
    if (e.key === 'Enter' && e.target instanceof HTMLInputElement)
      e.preventDefault();
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = createSurveyFormData(formDataId);
    console.log(formData, 'formData');
  };

  const handleClickAddSurveyListBtn = () => {
    const newFormId = `${SURVEY_INTRO.COMMON_ADDITION_TEXTFIELD_ID}${
      textFields.length - 2
    }`;
    setFormDataId([...formDataId, newFormId]);
    setTextFields([
      ...textFields,
      <AdditionalTextfield
        key={textFields.length}
        inputId={newFormId}
        notice={<Notice text="0/500" />}
      />,
    ]);
  };

  return (
    <div className="mt-56 bg-gray100 min-w-1200">
      <form
        className="w-1044 pl-143 [&>div:not(:last-of-type)]:mb-16"
        onKeyDown={handleKeyDownForPreventEnterSubmit}
        onSubmit={handleSubmitForm}
        id="test"
      >
        {textFields.map((V) => cloneElement(V))}
      </form>
      <button type="button" onClick={handleClickAddSurveyListBtn}>
        add
      </button>
      <br />
      <button type="submit" form="test">
        confirm form values
      </button>
    </div>
  );
};
export default Survey;
