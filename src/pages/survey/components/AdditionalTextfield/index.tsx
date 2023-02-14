import { addBoxShadow, removeBoxShadow } from 'utils';
import { AdditionalTextfieldProps } from './types';
import styles from './AdditionalTextfield.module.scss';

const AdditionalTextfield = ({ inputId, notice }: AdditionalTextfieldProps) => {
  return (
    <div className="p-24 border-solid border-1 border-gray200 w-[100%] bg-white rounded-8">
      <div className="flex justify-between mb-7">
        <input
          className="w-full outline-none text-gray800 text-body_2_SB"
          id={`${inputId}-title`}
          placeholder="제목을 입력해주세요."
        />
        <div>{notice}</div>
      </div>
      <div
        className={`w-[100%] outline-none text-body_1_MD ${styles.editable}`}
        id={`${inputId}-description`}
        placeholder="상세 설명을 입력해주세요"
        contentEditable
        onFocus={addBoxShadow}
        onBlur={removeBoxShadow}
      />
    </div>
  );
};
export default AdditionalTextfield;
