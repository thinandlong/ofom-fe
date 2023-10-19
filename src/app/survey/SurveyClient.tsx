'use client';

import Spacing from '@/components/spacing';
import Wrapper from './components/Wrapper';
import Controller from './components/Controller';
import TextFieldList from './components/TextFieldList';

const SurveyClient = () => {
  return (
    <Wrapper>
      <Controller />
      <Spacing size={24} />
      <TextFieldList />
    </Wrapper>
  );
};

export default SurveyClient;
