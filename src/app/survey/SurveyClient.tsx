'use client';

import Wrapper from './components/Wrapper';
import Controller from './components/Controller';
import TextFiled from './components/TextField';
import TextFiledAddButton from './components/TextFieldAddButton';

const SurveyClient = () => {
  return (
    <Wrapper>
      <Controller />
      <TextFiled />
      <TextFiledAddButton />
    </Wrapper>
  );
};

export default SurveyClient;
