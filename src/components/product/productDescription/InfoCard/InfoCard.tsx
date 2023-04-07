import Image from 'next/image';
import classes from './infoCard.module.css';
export const InfoCard = () => {
  return (
    <div className={classes.infoCardContainer}>
      <div className={classes.infoBox}>
        <div className={classes.infoImage}>
          <Image
            alt='EFICAZ NA LIMDEZA'
            src={'/productDescription/floor.png'}
            fill
          />
        </div>
        <p>EFICAZ NA LIMPEZA DE PISOS CERÂMICOS, PEDRAS E PORCELANATOS</p>
      </div>
      <div className={classes.infoBox}>
        <div className={classes.infoImage}>
          <Image
            alt='EFICAZ NA LIMDEZA'
            src={'/productDescription/shovel.png'}
            fill
          />
        </div>
        <p>REMOVE RESÍDUOS DEIXADOS AO TÉRMINO DA OBRA</p>
      </div>
      <div className={classes.infoBox}>
        <div className={classes.infoImage}>
          <Image
            alt='EFICAZ NA LIMDEZA'
            src={'/productDescription/water-drop.png'}
            fill
          />
        </div>
        <p>5 LITROS (CONCENTRADO) RENDE ATÉ 50 LITROS</p>
      </div>
    </div>
  );
};
