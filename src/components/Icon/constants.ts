export const COLOR_MAPPER = {
  red700: 'fill-red700',
  green600: 'fill-green600',
  gray900: 'fill-gray900',
} as const;

export const ICON_MAPPER = {
  check: () => import('@root/public/assets/svgs/check.svg'),
  checkCircle: () => import('@root/public/assets/svgs/checkCircle.svg'),
} as const;
