import TextFieldAddButtonSVG from 'public/images/textfield-addbutton.svg';

const TextFieldAddButton = () => {
  return (
    <button
      className="flex-center w-[98px] h-[98px] bg-blue50 rounded-lg border border-blue600"
      type="button"
    >
      <TextFieldAddButtonSVG className="w-[34px] h-[34px]" />
    </button>
  );
};

export default TextFieldAddButton;
