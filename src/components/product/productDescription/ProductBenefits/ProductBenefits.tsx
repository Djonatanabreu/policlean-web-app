import Image from 'next/image';
import classes from './productBenefits.module.css';
import { productBenefitsData } from './_helpers/productBenefitsData';
import { Icon } from '@/components/Icon/Icon';

export const ProductBenefits = () => {
  return (
    <section className={classes.benefitsContainer}>
      <article>
        <Image
          alt='Product Benefits'
          src={'/productDescription/product-benefits.jpg'}
          fill
          priority
        />
      </article>
      <div className={classes.benefitsWrapper}>
        <h1>Benefícios do pós obra:</h1>
        <ul>
          {productBenefitsData.map((benefits) => (
            <li key={benefits.id}>
              <Icon name={'ArrowList'} />
              <p>{benefits.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
