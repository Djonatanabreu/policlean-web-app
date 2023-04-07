import { INavbuttonProps } from './types';
import classes from './navButton.module.css';

export const NavButton = ({ children, onClick }: INavbuttonProps) => {
  return (
    <div className={classes.navButtonContainer}>
      <button>{children}</button>
    </div>
  );
};
