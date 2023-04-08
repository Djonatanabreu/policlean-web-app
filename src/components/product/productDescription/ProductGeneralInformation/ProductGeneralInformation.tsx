import Image from 'next/image';
import classes from './productGeneralInformation.module.css';

export const ProducGeneralInformation = () => {
  return (
    <section className={classes.generalInfoContainer}>
      <article className={classes.firstArticleContainer}>
        <h1>O que fazer após a limpeza?</h1>
        <p>
          Após o término da limpeza, recomendamos que seja aplicado detergente
          neutro por toda a superfície, para que possíveis resíduos de ácidos
          sejam neutralizados e tenham suas ações interrompidas. Quando o ácido
          fica agindo sobre o piso, ele tende a penetrar pelos poros e atingir
          toda propriedade que está abaixo daquela camada de superfície,
          deixando-o com manchas irreversíveis.
        </p>
      </article>
      <article className={classes.secondArticleContainer}>
        <h1>Descrição</h1>
        <ul className={classes.ulBox}>
          <li>
            <p>Embalagem: 1 garrafão de 5 litros</p>
          </li>
          <li>
            <p>Produto concentrado: 1 litro rende até 10 litros</p>
          </li>
          <li>
            <p>Produto registrado na ANVISA</p>
          </li>
          <li>
            <p>
              Usar o produto sempre diluído e jamais deixar secar sobre o piso
            </p>
          </li>
        </ul>
      </article>
      <article className={classes.thirdArticleContainer}>
        <h1 className={classes.thirdArticleTitle}>Precauções</h1>
        <p className={classes.thirdArticleText}>
          Para sua segurança, é necessário o uso de EPI&apos;s para manusear o
          produto. Por se tratar de um produto à base de ácido, recomendamos uso
          de luvas de proteção, botas ou sapatos fechados, óculos e máscara.
          Lave as mãos cuidadosamente após o manuseio. Em caso de contato com a
          pele ou olhos lave cuidadosamente com água corrente durante vários
          minutos.
        </p>
        <div className={classes.imageWarningsContainer}>
          <div className={`${classes.imageWarning} ${classes.image1}`}>
            <Image
              alt='Precauções'
              src={'/productDescription/productUsability/iconepi01.png'}
              fill
            />
          </div>
          <div className={`${classes.imageWarning} ${classes.image2}`}>
            <Image
              alt='Precauções'
              src={'/productDescription/productUsability/iconepi02.png'}
              fill
            />
          </div>
          <div className={`${classes.imageWarning} ${classes.image3}`}>
            <Image
              alt='Precauções'
              src={'/productDescription/productUsability/iconepi03.png'}
              fill
            />
          </div>
          <div className={`${classes.imageWarning} ${classes.image4}`}>
            <Image
              alt='Precauções'
              src={'/productDescription/productUsability/iconepi04.png'}
              fill
            />
          </div>
        </div>
        <p className={classes.thirdArticleText}>
          Conserve o produto fora do alcance de crianças e animais domésticos.
          Produto não testado em animais
        </p>
        <div className={classes.imageBottomContainer}>
          <div className={classes.circleImage} />
          <Image
            alt='luvas'
            src={'/productDescription/productUsability/luva.png'}
            fill
          />
        </div>
      </article>
    </section>
  );
};
