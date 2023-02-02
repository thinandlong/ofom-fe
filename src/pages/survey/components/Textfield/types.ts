import { ReactElement } from 'react';

type InputFontSize = 'text-title_2_BD' | 'text-body_1_MD';

export interface TextFieldProps {
  label: string;
  placeholder: string;
  inputFontSize: InputFontSize;
  notice: ReactElement;
  inputId: string;
  type?: 'textArea' | 'input';
}
