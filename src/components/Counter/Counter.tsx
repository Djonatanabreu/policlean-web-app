import classes from './counter.module.css';
import { ICounterProps } from './types';

export const Counter = ({
  onAddHandler,
  onSubHandler,
  amountValue = 1,
}: ICounterProps) => {
  return (
    <div className={classes.counterContainer}>
      <button onClick={onSubHandler}>-</button>
      <input value={amountValue} />
      <button onClick={onAddHandler}>+</button>
    </div>
  );
};
