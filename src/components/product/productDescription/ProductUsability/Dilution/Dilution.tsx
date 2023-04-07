import Image from 'next/image';
import classes from './dilution.module.css';
import { IDilutionProps } from './types';

export const Dilution = ({
  path,
  alt,
  stepTitle,
  waterValue,
  productValue,
  measure,
}: IDilutionProps) => {
  return (
    <div className={classes.dilutionStep}>
      <h1 className={classes.stepTitle}>{stepTitle}</h1>
      <div className={classes.imageBox}>
        <Image
          alt={alt}
          src={`/productDescription/productUsability/${path}`}
          fill
        />
      </div>
      <div className={classes.circlesContainer}>
        <div className={classes.circle}>
          <h1>{productValue}</h1>
        </div>
        <div className={classes.circle}>
          <h1>{waterValue}</h1>
        </div>
      </div>
      <div className={classes.measureInfo}>
        <h1>{measure}</h1>
      </div>
    </div>
  );
};
