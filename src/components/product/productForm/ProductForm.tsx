import { Button } from '@/components/Button/Button';
import classes from './formContainer.module.css';
import { PriceTray } from './priceTray/PriceTray';

import { RatingStars } from './ratingStars/RatingStars';
import { ProductDelivery } from '../productDelivery/ProductDelivery';

export const ProductForm = () => {
  return (
    <section className={classes.formContainer}>
      <div className={classes.formTitleBox}>
        <h1> RT-70 - Limpador Multiuso 05 L</h1>
        <p>REF: PA076 </p>
      </div>
      <div>
        <RatingStars />
      </div>
      {/* <hr /> */}
      <PriceTray />
      <ProductDelivery />
    </section>
  );
};
