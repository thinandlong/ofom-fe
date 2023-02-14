import { FocusEvent } from 'react';

const addBoxShadow = (e: FocusEvent) => {
  const activeTextField = e.target.parentElement;
  activeTextField?.setAttribute(
    'style',
    'box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08)',
  );
};
export default addBoxShadow;
