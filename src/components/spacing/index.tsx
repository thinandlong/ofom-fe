import { HTMLAttributes } from 'react';

export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = ({ direction = 'vertical', size, ...props }: SpacingProps) => {
  const style = {
    width: direction === 'horizontal' ? `${size}px` : undefined,
    height: direction === 'vertical' ? `${size}px` : undefined,
  };

  return <div style={style} {...props} />;
};

export default Spacing;
