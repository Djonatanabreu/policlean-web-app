import { SVGProps } from 'react';

export type IconName = 'ArrowDown' | 'ArrowUp' | 'Star' | 'ArrowList';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}
