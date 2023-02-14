/* eslint-disable prefer-destructuring */
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { SURVEY_INTRO } from '../constants';
import { SurveyIntroData } from '../types';

const createSurveyFormData = (formDataId: string[]) => {
  dayjs.extend(customParseFormat);
  let isValid = true;
  const formData = { extra: [] } as SurveyIntroData;
  formDataId.forEach((id) => {
    switch (id) {
      case SURVEY_INTRO.TITLE: {
        const el = document.querySelector(`#${id}`) as HTMLInputElement;
        if (!el.value) {
          isValid = false;
          return;
        }
        formData.title = el.value;
        break;
      }
      case SURVEY_INTRO.DESCRIPTION: {
        const el = document.querySelector(`#${id}`) as HTMLDivElement;
        if (!el.innerHTML) {
          isValid = false;
          return;
        }
        formData.description = el.innerHTML;
        break;
      }
      case SURVEY_INTRO.DURATION: {
        const el = document.querySelector(`#${id}`) as HTMLInputElement;
        const durations = el.value.split(' ~ ');
        if (durations.length !== 2) {
          isValid = false;
          break;
        }
        const durationFormat = 'YYYY.MM.DD(HH:mm)';
        durations.forEach((duration) => {
          const isValidDuration = dayjs(
            duration,
            durationFormat,
            true,
          ).isValid();
          if (!isValidDuration) isValid = false;
        });
        if (!isValid) break;
        formData.startAt = durations[0];
        formData.endAt = durations[1];
        break;
      }
      default:
        {
          if (!id.includes(SURVEY_INTRO.COMMON_ADDITION_TEXTFIELD_ID)) break;
          const titleEl = document.querySelector(
            `#${id}-title`,
          ) as HTMLInputElement;
          const descriptionEl = document.querySelector(
            `#${id}-description`,
          ) as HTMLDivElement;
          const title = titleEl.value;
          const content = descriptionEl.innerHTML;
          formData.extra = [...formData.extra, { title, content }];
        }
        break;
    }
  });
  return isValid ? formData : null;
};
export default createSurveyFormData;
