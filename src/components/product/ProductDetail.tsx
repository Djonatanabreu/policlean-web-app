import { ProductGallery } from './productGallery/ProductGallery';
import classes from './productDetail.module.css';
import { ProductDescripton } from './productDescription/ProductDescription';

export const ProductDetail = () => {
  return (
    <div className={classes.container}>
      <ProductGallery />
      <ProductDescripton />
    </div>
  );
};
