import { SVGAttributes, SVGProps } from 'react';

export type IconName = 'ArrowDown' | 'ArrowUp';

export interface IconProps extends SVGProps<SVGElement> {
  name: IconName;
}
