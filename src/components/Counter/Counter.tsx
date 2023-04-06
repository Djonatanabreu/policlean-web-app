import classes from './counter.module.css';

export const Counter = () => {
  return (
    <div className={classes.counterContainer}>
      <p>-</p>
      <p>{10}</p>
      <p>+</p>
    </div>
  );
};
