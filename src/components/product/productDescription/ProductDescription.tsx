import Image from 'next/image';
import { NavDescriptionOptions } from './NavDescriptionOptions/NavDescriptionOptions';
import classes from './productDescription.module.css';
import { InfoCard } from './InfoCard/InfoCard';
import { ProductBenefits } from './ProductBenefits/ProductBenefits';
import { ProductUsability } from './ProductUsability/ProductUsability';

export const ProductDescripton = () => {
  return (
    <div className={classes.productDescriptionContainer}>
      <div className={classes.whatItIsContainer}>
        <div className={classes.ImagesContainer}>
          <Image
            alt='O que é ?'
            src={'/productDescription/whatitis.jpg'}
            fill
          />
          <div className={classes.blueBox} />
          <Image
            className={classes.productImage}
            alt='mockUp Super Produto'
            src={'/productDescription/mockup-com-capa.png'}
            fill
          />
        </div>
        <div className={classes.textContainer}>
          <article className={classes.wrapperTextDescription}>
            <section className={classes.whatIsItSection}>
              <h2>O que é ?</h2>
              <p>Detergente desincrustante pós obra.</p>
              <p>
                Indicado para limpeza pesada das sujidades do pós-obra,
                principalmente de resíduos como: excesso de rejunte, argamassa,
                cimento, gesso, terra e respingos de tinta*.
              </p>
              <p>*Somente respingos recentes de tintas à base de água</p>
            </section>
            <section className={classes.whatIsItSection}>
              <h2>Indicação de uso</h2>
              <p>
                Ideal para uso em superfícies laváveis e em pisos de
                porcelanato, cerâmicos, cotto/lajotas, cimentícios, granito,
                granilite, pastilhas, azulejos, antiderrapantes e pedras
                porosas, equipamentos como betoneiras e também materiais usados
                em uma reforma ou construção.
              </p>
            </section>
            <section className={classes.whatIsItSection}>
              <h2>Tipos de superfícies que podem ser tratadas:</h2>
              <p>
                Devido a versatilidade do produto, ele pode ser utilizado em
                todo tipo de piso lavável. Para pisos que possuem acabamento com
                brilho, o ideal é utilizar a diluição de limpeza leve e aplicar
                em pequenas partes por vez, para que o produto não seque sobre o
                piso.
              </p>
            </section>
          </article>
          <InfoCard />
        </div>
        <ProductBenefits />
      </div>
      <ProductUsability />
      <NavDescriptionOptions />
    </div>
  );
};
