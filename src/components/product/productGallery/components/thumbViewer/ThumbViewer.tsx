import Image from 'next/image';
import classes from './thumbViewer.module.css';

export const ThumbViewer = () => {
  return (
    <div className={classes.container}>
      <Image
        src={'/super_pos_obra_principal_5l.png'}
        alt={''}
        width={600}
        height={600}
      />
    </div>
  );
};
