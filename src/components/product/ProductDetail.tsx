import { ProductForm } from './productForm/ProductForm';
import { ProductGallery } from './productGallery/ProductGallery';
import classes from './productDetail.module.css';
import { ProductDescripton } from './productDescription/ProductDescription';

export const ProductDetail = () => {
  return (
    <section className={classes.detailContainer}>
      <ProductGallery />
      <ProductForm />
      <ProductDescripton />
    </section>
  );
};
