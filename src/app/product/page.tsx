'use client';
import { BreadCrumb, ProductDetail } from '@/components';

import classes from './product.module.css';

export default function Product() {
  return (
    <section className={classes.productPageContent}>
      <BreadCrumb />
      <ProductDetail />
    </section>
  );
}
