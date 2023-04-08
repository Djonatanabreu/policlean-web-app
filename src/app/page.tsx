import { BreadCrumb, ProductDetail } from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.productPageContent}>
        <div className={styles.breadCrumb}>
          <BreadCrumb />
        </div>
        <ProductDetail />
      </section>
    </main>
  );
}
