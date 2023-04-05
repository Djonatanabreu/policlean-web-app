'use client';

import { Icon } from '@/components/Icon/Icon';
import classes from './controls.module.css';
import { useState } from 'react';

export const Controls = () => {
  const [fill, setFill] = useState<string>();
  const [stroke, setStroke] = useState<string>();
  return (
    <div className={classes.controlsContainer}>
      <div
        className={classes.btn}
        // onMouseEnter={() => {
        //   console.log('hello');
        //   setFill('#004C98');
        //   setStroke('white');
        // }}
        // onMouseLeave={() => {
        //   console.log('hello');
        //   setFill('#004C98');
        //   setStroke('white');
        // }}
      >
        <Icon
          className={`${classes.circle} ${classes.path}`}
          name='ArrowDown'
        />
      </div>
      <div className={classes.btn}>
        <Icon className={`${classes.circle} ${classes.path}`} name='ArrowUp' />
      </div>
    </div>
  );
};

// ScrolD - quando clicar : pegar ref da div(container) e mover para baixo. (event.scroll(x, y{wI x 10}))
