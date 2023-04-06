import { SVGProps, createElement } from 'react';
import * as Icons from './lib';
import { IconProps } from './types';

export const Icon = ({ name, ...props }: IconProps) => {
  if (name) {
    return createElement(Icons[name], { ...props });
  } else {
    return <div />;
  }
};
