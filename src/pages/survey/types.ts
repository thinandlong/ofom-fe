export interface ExtraFormData {
  title: string;
  content: string;
}
export interface SurveyIntroData {
  title: string;
  description: string;
  isDuplicated: boolean;
  startAt: string | Date;
  endAt: string | Date;
  extra: ExtraFormData[] | [];
}
