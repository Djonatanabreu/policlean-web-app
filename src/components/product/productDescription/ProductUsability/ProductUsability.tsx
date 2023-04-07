import { Dilution } from './Dilution/Dilution';
import { StepsCard } from './StepsCard/StepsCard';
import classes from './productUsability.module.css';

export const ProductUsability = () => {
  return (
    <section className={classes.usabilityContainer}>
      <h1>Como usar ?</h1>
      <article>
        <StepsCard
          text='Diluir de acordo com o grau de sujidade. Não recomendamos a utilização do produto puro'
          number={1}
        />
        <StepsCard
          text='Deixar agir de 5 a 10 minutos tomando cuidado para não secar o produto'
          number={2}
        />
        <StepsCard
          text='Enxaguar com água em abundância até retirar todo o produto'
          number={3}
        />
        <StepsCard
          text='Diluir de acordo com o grau de sujidade. Não recomendamos a utilização do produto puro'
          number={4}
        />
        <StepsCard text='Repetir a operação se necessário' number={5} />
      </article>
      <article className={classes.dilutionStepContainer}>
        <div className={classes.dilutionContainer}>
          <h1 className={classes.title}>Diluição</h1>
          <Dilution
            measure='250ml/L'
            productValue={1}
            waterValue={2}
            alt='First Step Dilution'
            stepTitle='LIMPEZA PESADA ATÉ'
            path={'baldes01.png'}
          />
          <Dilution
            measure='166ml/L'
            productValue={1}
            waterValue={2}
            alt='First Step Dilution'
            stepTitle='LIMPEZA MÉDIA ATÉ'
            path={'baldes02.png'}
          />
          <Dilution
            measure='100ml/L'
            productValue={1}
            waterValue={2}
            alt='First Step Dilution'
            stepTitle='LIMPEZA LEVE ATÉ'
            path={'baldes03.png'}
          />
          <div className={classes.proportionContainer}>
            <h1 className={classes.proportionTitle}>PROPORÇÃO:</h1>
            <div className={classes.proportionInfo}>
              <div className={classes.circleProduct} />
              <p>PRODUTO</p>
            </div>
            <div className={classes.proportionInfo}>
              <div className={classes.circleWater} />
              <p>ÁGUA</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
