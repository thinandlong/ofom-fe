import { SURVEY_INTRO } from '@pages/survey/constants';
import { atom } from 'recoil';

export const formDataIdStore = atom<string[]>({
  key: 'formDataStore',
  default: [
    SURVEY_INTRO.TITLE,
    SURVEY_INTRO.DESCRIPTION,
    SURVEY_INTRO.DURATION,
  ],
});
