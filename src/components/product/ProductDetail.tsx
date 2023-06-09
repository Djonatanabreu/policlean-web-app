import { ProductForm } from './productForm/ProductForm';
import { ProductGallery } from './productGallery/ProductGallery';
import classes from './productDetail.module.css';
import { ProductDescription } from './productDescription/ProductDescription';
import { BreadCrumb } from '../breadcrumb/BreadCrumb';

export const ProductDetail = () => {
  return (
    <div className={classes.productDetailContainer}>
      <BreadCrumb />
      <section className={classes.detailContainer}>
        <ProductGallery />
        <ProductForm />
      </section>
      <ProductDescription />
    </div>
  );
};
