import { addBoxShadow, removeBoxShadow } from 'utils';
import Chip from './components/Chip';
import { TextFieldProps } from './types';
import styles from './Textfield.module.scss';

const Textfield = ({
  label,
  placeholder,
  inputFontSize,
  notice,
  inputId,
  type = 'input',
}: TextFieldProps) => {
  return (
    <div className="p-24 border-solid border-1 border-gray200 w-[100%] bg-white rounded-8">
      <div className="flex justify-between mb-7">
        <div>
          <Chip name="필수" />
          <label
            htmlFor={inputId}
            className="ml-12 text-gray800 text-body_2_SB"
          >
            {label}
          </label>
        </div>
        <div>{notice}</div>
      </div>
      {type === 'input' && (
        <input
          className={`${inputFontSize} outline-none `}
          style={{ width: 'inherit' }}
          placeholder={placeholder}
          id={inputId}
          onFocus={addBoxShadow}
          onBlur={removeBoxShadow}
        />
      )}
      {type === 'textArea' && (
        <div
          className={`w-[100%] outline-none text-body_1_MD ${styles.editable}`}
          id={inputId}
          placeholder={placeholder}
          contentEditable
          onFocus={addBoxShadow}
          onBlur={removeBoxShadow}
        />
      )}
    </div>
  );
};
export default Textfield;
