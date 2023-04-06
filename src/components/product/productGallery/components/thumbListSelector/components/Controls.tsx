'use client';

import { Icon } from '@/components/Icon/Icon';
import classes from './controls.module.css';
import { useRef } from 'react';

export const Controls = () => {
  return (
    <div className={classes.controlsContainer}>
      <div className={classes.btn}>
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
