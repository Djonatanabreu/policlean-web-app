import { SVGProps } from 'react';

export type IconName = 'ArrowDown' | 'ArrowUp' | 'Star';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}
