/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { lazy, Suspense, useMemo } from 'react';
import { COLOR_MAPPER, ICON_MAPPER } from './constants';

interface IconProps {
  name: keyof typeof ICON_MAPPER;
  color: keyof typeof COLOR_MAPPER;
  size?: number;
}
const Icon = ({ color, size, name }: IconProps) => {
  const IconComponent = useMemo(() => lazy(ICON_MAPPER[name]!), [name]);
  return (
    <Suspense fallback={<div>loading</div>}>
      <IconComponent
        className={COLOR_MAPPER[color]}
        width={size}
        height={size}
      />
    </Suspense>
  );
};
export default Icon;
