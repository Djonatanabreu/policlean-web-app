import { ProductForm } from './productForm/ProductForm';
import { ProductGallery } from './productGallery/ProductGallery';
import classes from './productDetail.module.css';
import { ProductDescripton } from './productDescription/ProductDescription';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';

export const ProductDetail = () => {
  return (
    <div className={classes.productDetailContainer}>
      <BreadCrumb />
      <section className={classes.detailContainer}>
        <ProductGallery />
        <ProductForm />
      </section>
      <ProductDescripton />
    </div>
  );
};
