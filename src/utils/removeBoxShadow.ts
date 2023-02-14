import { FocusEvent } from 'react';

const removeBoxShadow = (e: FocusEvent) => {
  const activeTextField = e.target.parentElement;
  activeTextField?.setAttribute('style', 'box-shadow: initial');
};
export default removeBoxShadow;
