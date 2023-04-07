'use client';
import { BreadCrumb, ProductDetail } from '@/components';

import classes from './product.module.css';

export default function Product() {
  console.log(window.pageYOffset);

  return (
    <section className={classes.productPageContent}>
      <BreadCrumb />
      <ProductDetail />
    </section>
  );
}
