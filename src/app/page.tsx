'use client';
import styles from './page.module.css';
import { ProductDetail } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.productPageContent}>
        <ProductDetail />
      </section>
    </main>
  );
}
