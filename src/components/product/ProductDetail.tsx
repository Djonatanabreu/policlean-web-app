import { ProductForm } from './productForm/ProductForm';
import { ProductGallery } from './productGallery/ProductGallery';
import classes from './productDetail.module.css';
import { Star } from '../Icon/lib';

export const ProductDetail = () => {
  return (
    <section className={classes.detailContainer}>
      <ProductGallery />
      <ProductForm />
    </section>
  );
};
