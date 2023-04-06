import { Counter } from '@/components/Counter/Counter';
import classes from './counter.module.css';

export const PriceTray = () => {
  return (
    <div className={classes.trayContainer}>
      <Counter />
      <div>
        <h1>{'R$75,00'}</h1>
        <p>Em até 12x de R$7,19</p>
      </div>
    </div>
  );
};
