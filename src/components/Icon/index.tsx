'use client';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CSSProperties, lazy, Suspense, useMemo } from 'react';
import { COLOR_MAPPER, ICON_MAPPER } from './constants';

interface IconProps {
  name: keyof typeof ICON_MAPPER;
  color: keyof typeof COLOR_MAPPER;
  size?: number;
  style?: CSSProperties;
}
const Icon = ({ color, size = 10, name, style = {} }: IconProps) => {
  const IconComponent = useMemo(() => lazy(ICON_MAPPER[name]!), [name]);
  return (
    <Suspense fallback={<div>loading</div>}>
      <IconComponent
        className={COLOR_MAPPER[color]}
        width={size}
        height={size}
        style={style}
      />
    </Suspense>
  );
};
export default Icon;
