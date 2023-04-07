import { ReactNode } from 'react';
import classes from './stepsCard.module.css';
interface IStepsCardProps {
  number: ReactNode;
  text: ReactNode;
}
export const StepsCard = ({ number, text }: IStepsCardProps) => {
  return (
    <div className={classes.stepsCardContainer}>
      <div className={classes.circle}>
        <h1>{number}</h1>
      </div>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
