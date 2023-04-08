import { ProductForm } from '../productForm/ProductForm';
import { ThumbListSelector } from './components/thumbListSelector/ThumbListSelector';
import { ThumbViewer } from './components/thumbViewer/ThumbViewer';
import classes from './productGallery.module.css';

export const ProductGallery = () => {
  return (
    <section className={classes.galleryContainer}>
      <div className={classes.galleryBox}>
        <ThumbListSelector />
        <ThumbViewer />
      </div>
      <ProductForm />
    </section>
  );
};
