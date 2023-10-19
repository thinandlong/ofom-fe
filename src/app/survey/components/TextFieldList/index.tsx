import React from 'react';
import TextField from '../TextField';
import TextFieldAddButton from '../TextFieldAddButton';

const TextFieldList = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <TextField type="title" />
      <TextField type="desc" />
      <TextField type="limit" />
      <TextFieldAddButton />
    </div>
  );
};

export default TextFieldList;
