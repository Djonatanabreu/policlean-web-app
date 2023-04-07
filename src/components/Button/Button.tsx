import { IButtonProps } from './types';
import classes from './classes.module.css';

export const Button = ({
  children,
  onClick,
  onLoad,
  largeButton = false,
}: IButtonProps) => {
  return (
    <button
      className={largeButton ? classes.btnContainerLarge : classes.btnContainer}
      onClick={onClick}
      onLoad={onLoad}
    >
      {children}
    </button>
  );
};
