import { SVGProps } from 'react';

export const ArrowUp = ({
  fill = 'white',
  stroke = '#004C98',
  className = '',
}: SVGProps<SVGSVGElement>) => {
  const classes = className.split(' ');
  return (
    <svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
      <circle
        className={classes[0]}
        cx='14'
        cy='14'
        r='13.5'
        fill={fill}
        stroke='#004C98'
      />
      <path className={classes[1]} stroke={stroke} d='M7.5 16L14 9L21 16' />
    </svg>
  );
};
