import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'start' | 'analytics' | 'save';
  children: ReactNode;
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
  const TYPE_VARIANT = {
    start:
      'w-[189px] h-[56px] px-[20px] py-[16px] bg-gray200 rounded-lg text-body_2_BD text-gray500 hover:bg-navy850 hover:text-white',
    analytics:
      'w-[189px] h-[84px] px-[16px] py-[16px] bg-gray200 rounded-lg text-body_2_BD text-gray500',
    save: 'flex-col-items-center w-[189px] h-[84px] px-[20px] py-[16px] bg-navy600 rounded-lg text-gray500',
  };

  return (
    <button className={TYPE_VARIANT[variant]} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
