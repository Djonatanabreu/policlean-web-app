import { SVGProps } from 'react';

export const ArrowDown = ({
  fill = 'white',
  stroke = '#004C98',
  className = '',
}: SVGProps<SVGSVGElement>) => {
  const classes = className.split(' ');
  return (
    <svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
      <circle
        className={classes[0]}
        fill={fill}
        cx='14'
        cy='14'
        r='13.5'
        stroke='#004C98'
      />
      <path className={classes[1]} d='M20.5 12L14 19L7 12' stroke={stroke} />
    </svg>
  );
};
