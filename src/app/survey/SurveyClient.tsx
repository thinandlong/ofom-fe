'use client';

import Spacing from '@/components/spacing';
import Wrapper from './components/Wrapper';
import Controller from './components/Controller';
import TextFiled from './components/TextField';
import TextFiledAddButton from './components/TextFieldAddButton';

const SurveyClient = () => {
  return (
    <Wrapper>
      <Controller />
      <Spacing size={24} />
      <TextFiled type="title" />
      <TextFiled type="desc" />
      <TextFiled type="limit" />
      <TextFiledAddButton />
    </Wrapper>
  );
};

export default SurveyClient;
